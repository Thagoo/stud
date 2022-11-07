import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap/";
import { LinkContainer } from "react-router-bootstrap/";

import { Outlet, NavLink } from "react-router-dom";

class NavbarMenu extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="md"
          className="navbar"
          bg="dark"
          variant="dark"
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <h1 className="stud-logo">STUD</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="navBarItems" href="">
                  Study Materials
                </Nav.Link>
                <Nav.Link className="navBarItems" href="">
                  Discuss
                </Nav.Link>

                <Nav.Link className="navBarItems" href="">
                  About
                </Nav.Link>
              </Nav>
              <Nav>
                <LinkContainer to="/login">
                  <Nav.Link className="navBarItems" target="_blank">
                    Login
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Button className="navBarItems" variant="outline-light">
                    Register
                  </Button>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMenu;
