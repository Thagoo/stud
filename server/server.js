const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

require("dotenv").config({ path: "./.env" });
MONGODB_URL = process.env.MONGODB_URL;
PORT = process.env.PORT;
console.log(MONGODB_URL, PORT);

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
  passwd: String,
});

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  //check email
  User.findOne({ uname: uname }, (err, user) => {
    if (user) {
      //check password
      if (passwd === user.passwd) {
        res.send({ message: "Login successfully", user: user });
      } else {
        res.send({ message: "Password and confirm password didn't match" });
      }
    } else {
      res.send({ message: "Please login to proceed" });
    }
  });
});

app.post("/register", (req, res) => {
  const { fname, lname, uname, passwd } = req.body;
  //check username
  User.findOne({ uname: uname }, (err, user) => {
    if (user) {
      res.send({ message: "User is already registerd" });
    } else {
      const user = new User({
        fname,
        lname,
        uname,
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

app.listen(PORT, () => {
  console.log("Server starting at 8000");
});
