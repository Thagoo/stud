import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [uname, setUname] = useState("");
  const [passwd, setPasswd] = useState("");
  const [user, setUser] = useState();

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
    const response = await axios.post("http://192.168.16.134:8000/login", user);
    // set the state of the user
    if (response.data == uname) {
      setUser(response.data);
      console.log(response.data);
      // store the user in localStorage
      localStorage.setItem("user", JSON.stringify(response.data));
    } else if (response.data == "user not found") {
      //[TODO customize this]
      alert("User not found! Please register");
    } else {
      alert("Password is incorrect");
    }
  };

  if (user) {
    window.location.href = "./";
  }
  useEffect(() => {});
  // if there's no user, show the login form
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="User Name"
          onChange={({ target }) => setUname(target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={({ target }) => setPasswd(target.value)}
        />
        <Form.Text muted>Forgot password? Don't remember.</Form.Text>
      </Form.Group>

      <Button style={{ width: `100%` }} type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
