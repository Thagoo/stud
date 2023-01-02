import React, { useState } from "react";
import { Tabs, Tab, Container, TabContainer } from "react-bootstrap/";
import Login from "./Login";
import Register from "../Register/Register";
import "./LoginTab.css";

function LogModal() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Container className="login-bg" fluid>
        <center>
          <img className="logo-login" src="stud-logo.svg" />
        </center>
        <br />
        <Container className="auth-inner" fluid>
          <Tab.Container defaultActiveKey="login">
            <Tabs
              defaultActiveKey="login"
              className="mb-3"
              variant="pills"
              justify
            >
              <Tab eventKey="login" title="Login">
                <Login />
              </Tab>
              <Tab eventKey="register" title="Register">
                <Register />
              </Tab>
            </Tabs>
          </Tab.Container>
        </Container>
        <Container className="login-footer">
          <br />
          <br />
          <br />

          <hr style={{ color: `white` }} />
          <br />
          <footer>
            <img className="stud-logo-footer" src="stud-logo.svg" />
            <br />
            <br />

            <p>STUD HUB IS A COLLEGE PROJECT</p>
            <br />
            <p>© 2023 copyrights</p>
          </footer>
        </Container>
      </Container>
    </>
  );
}

export default LogModal;
