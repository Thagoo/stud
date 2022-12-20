const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const { Server } = require("socket.io");

require("dotenv").config({ path: "./.env" });
const bcrypt = require("bcrypt");

MONGODB_URL = process.env.MONGODB_URL;
PORT = process.env.PORT;
NEWS_API_ID = process.env.NEWS_API_ID;
mongoose.connect(
  MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  uname: String,
  course: String,
  sem: String,
  passwd: String,
});

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", async (req, res) => {
  const { uname, passwd } = req.body;

  //check username
  const user = await User.findOne({ uname: uname });
  if (!user) {
    return res.send("user not found");
  }

  // verify password with encrypted password
  if (await bcrypt.compare(passwd, user.passwd)) {
    res.send(uname);
  } else {
    res.send("password is incorrect");
  }
});

app.post("/register", async (req, res) => {
  const { fname, lname, uname, course, sem, passwd } = req.body;

  // Ecrypt password using bcrypt
  const encryptedPassword = await bcrypt.hash(passwd, 10);

  //check username
  User.findOne({ uname: uname }, (err, user) => {
    if (user) {
      res.send("exist");
    } else {
      const user = new User({
        fname,
        lname,
        uname,
        course,
        sem,
        passwd: encryptedPassword,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ status: "Account has been created!! Please Login" });
        }
      });
    }
  });
});

app.get("/envapi", async (req, res) => {
  res.send(NEWS_API_ID);
});
const server = app.listen("8000", () => {
  console.log(`Server listening on 8000`);
});

const socketIO = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
require("./discuss/discuss")(socketIO);
