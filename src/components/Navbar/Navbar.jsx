import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap/";

class NavbarMenu extends React.Component {
  handleLogout = () => {
    localStorage.clear();
    window.location.href = "./";
  };
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
                <Nav.Link className="navBarItems" href="/studymaterials">
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
                <Nav.Link className="navBarItems" href="">
                  {localStorage.getItem("user").replace(/^"(.+)"$/, "$1")}
                </Nav.Link>
                <Button
                  className="navBarItems"
                  variant="outline-light"
                  onClick={this.handleLogout}
                >
                  Logout
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMenu;
