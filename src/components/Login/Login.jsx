import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [uname, setUname] = useState("");
  const [passwd, setPasswd] = useState("");
  const [user, setUser] = useState();
  const [unameError, setUnameError] = useState("");
  const [passwdError, setPasswdError] = useState("");

  // logout the user
  const handleLogout = () => {
    setUser({});
    setUname("");
    setPasswd("");
    localStorage.clear();
  };

  // login the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { uname, passwd };
    // send the uname and password to the server
    const response = await axios.post("http://localhost:8000/login", user);
    // set the state of the user
    if (response.data == uname) {
      setUser(response.data);
      console.log(response.data);
      // store the user in localStorage
      localStorage.setItem("user", JSON.stringify(response.data));
    } else if (response.data == "user not found") {
      setUnameError(true);
      //[TODO customize this]
      alert("User not found! Please register");
    } else {
      alert("Password is incorrect");
      setPasswdError(true);
    }
  };

  if (user) {
    window.location.href = "./";
  }
  useEffect(() => {});
  // if there's no user, show the login form
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="uname">User Name</label>
        <input
          type="text"
          className={unameError ? "form-control invalid" : "form-control"}
          placeholder="User Name"
          id="uname"
          onChange={({ target }) => setUname(target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwd">Password</label>
        <input
          type="password"
          className={passwdError ? "form-control invalid" : "form-control"}
          placeholder="Password"
          id="passwd"
          onChange={({ target }) => setPasswd(target.value)}
        />
      </div>

      <div>
        <Button
          type="submit"
          style={{ width: `100%` }}
          variant="outline-primary"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Login;
