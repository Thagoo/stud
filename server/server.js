const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const discuss = require("./discuss/discuss");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

require("dotenv").config({ path: "./.env" });
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
app.post("/login", (req, res) => {
  const { uname, passwd } = req.body;

  //check uname
  User.findOne({ uname: uname }, (err, user) => {
    if (user) {
      //check password
      if (passwd === user.passwd) {
        res.send(uname);
      } else {
        res.send("password is incorrect");
      }
    } else {
      res.send("user not found");
    }
  });
});

app.post("/register", (req, res) => {
  const { fname, lname, uname, course, sem, passwd } = req.body;

  //check username
  User.findOne({ uname: uname }, (err, user) => {
    if (user) {
      console.log(user);
      res.send("exist");
    } else {
      const user = new User({
        fname,
        lname,
        uname,
        course,
        sem,
        passwd,
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
  // res.send("register");
  //   console.log(req.body);
});

app.get("/envapi", async (req, res) => {
  res.send(NEWS_API_ID);
});

app.listen(PORT, () => {
  console.log("Server starting at 8000");
});
