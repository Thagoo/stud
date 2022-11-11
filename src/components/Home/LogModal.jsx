import React, { useState } from "react";
import { Modal } from "react-bootstrap/";

import "reactjs-popup/dist/index.css";
import { LinkContainer } from "react-router-bootstrap/";
import { Button } from "react-bootstrap/";
import Login from "../Login/Login";

function LogModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} animation={true}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
          <LinkContainer to="/register">
            <Button variant="secondary">Register</Button>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogModal;
