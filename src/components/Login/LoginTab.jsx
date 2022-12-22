import React, { useState } from "react";
import { Tabs, Tab, Container, TabContainer } from "react-bootstrap/";
import Login from "./Login";
import Register from "../Register/Register";
import "./LoginTab.css";

function LogModal() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Container style={{ marginTop: `2vw` }}>
        <Container className="auth-inner">
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
      </Container>
    </>
  );
}

export default LogModal;
