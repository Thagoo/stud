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
      <Register />
    </>
  );
}

export default RegModal;
