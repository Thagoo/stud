import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Button, Form, InputGroup } from "react-bootstrap";

const ChatFooter = ({ username, socket, room }) => {
  const [message, setMessage] = useState("");
  const date = new Date();
  const Time = date.getHours() + ":" + date.getMinutes();
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message && username) {
      socket.emit("message", {
        message: message,
        username: username,
        id: `${socket.id}${Math.random()}`,
        sodketID: socket.id,
        time: Time,
      });
    }
    setMessage("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
      setInputDisabled(true);
    }
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          className="msg-box"
          type="text"
          placeholder="Write message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <Button
          onClick={handleSendMessage}
          size="sm"
          className="btn-send"
          variant="outline-secondary"
          type="submit"
        >
          SEND
        </Button>
      </InputGroup>
    </>
  );
};

export default ChatFooter;
