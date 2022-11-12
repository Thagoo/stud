import React from "react";
import { Modal } from "react-bootstrap/";
import "reactjs-popup/dist/index.css";
import { LinkContainer } from "react-router-bootstrap/";
import { Button } from "react-bootstrap/";
import { useState } from "react";
import Register from "../Register/Register";

function RegModal() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal show={show} animation={true}>
        <Modal.Header>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />
        </Modal.Body>
        <Modal.Footer>
          <p>already have an account?</p>
          <LinkContainer to="/">
            <Button variant="secondary">Login</Button>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegModal;
