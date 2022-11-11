import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [uname, setUname] = useState("");
  const [passwd, setPasswd] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

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
    setUser(response.data);
    console.log(response.data);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data));
  };
  if (user) {
    window.location.href = "./";
  }
  // if there's no user, show the login form
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="uname">User Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          id="uname"
          onChange={({ target }) => setUname(target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwd">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          id="passwd"
          onChange={({ target }) => setPasswd(target.value)}
        />
      </div>

      <div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
