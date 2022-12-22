import React, { useState } from "react";
import { Modal } from "react-bootstrap/";

import "reactjs-popup/dist/index.css";
import { LinkContainer } from "react-router-bootstrap/";
import { Button } from "react-bootstrap/";
import Login from "./Login";
import "./Home.css";

function LogModal() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal
        show={show}
        animation={true}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default LogModal;
