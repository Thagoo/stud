import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap/";
import { LinkContainer } from "react-router-bootstrap";

import { useState, useEffect } from "react";

const NavbarHeader = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "./";
  };

  useEffect(() => {});
  return (
    <div>
      <Navbar
        expand="sm"
        bg="light"
        className="fixed-top"
        style={{
          boxShadow: `0 2px 100px rgba(0,0,0,.25)`,
        }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="logo-header-main" src="stud-logo.svg" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/studymaterials">
                <Nav.Link to="/studymaterials" className="navBarItems">
                  Study Materials
                </Nav.Link>
              </LinkContainer>

              <Nav.Link onClick={props.handleShow} lassName="navBarItems">
                Discuss
              </Nav.Link>

              <Nav.Link className="navBarItems" href="">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="navBarItems" href="">
                {localStorage.getItem("user").replace(/^"(.+)"$/, "$1")}
              </Nav.Link>
              <Button
                className="navBarItems"
                variant="outline-dark"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
