import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "reactjs-popup/dist/index.css";
import { LinkContainer } from "react-router-bootstrap/";
import { Tabs, Dropdown, Container, TabContainer } from "react-bootstrap/";
import Login from "../Login/Login";
import "./Home.css";
import Register from "../Register/Register";

function LogModal() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="container">
        <div className="auth-inner">
          <h1 className="stud-log">
            <img src="./stud-logo.png" className="logo"></img>
            STUD
          </h1>
          <Tab.Container defaultActiveKey="login">
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Tabs defaultActiveKey="login" className="mb-3" justify>
                  <Tab eventKey="login" title="Login">
                    <Login />
                  </Tab>
                  <Tab eventKey="register" title="Register">
                    <Register />
                  </Tab>
                </Tabs>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
}

export default LogModal;
