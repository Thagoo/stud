import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Button } from "react-bootstrap";

const ChatFooter = ({ username, socket, room }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message && username) {
      socket.emit("message", {
        message: message,
        username: username,
        id: `${socket.id}${Math.random()}`,
        sodketID: socket.id,
      });
    }
    setMessage("");
  };

  useEffect(() => {
    socket.on("recieve", () => {
      socket.emit("message", {
        message: `Welcome ${username}`,
        username: username,
        id: `${socket.id}${Math.random()}`,
        sodketID: socket.id,
      });
    });
  });

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit">SEND</Button>
      </form>
    </div>
  );
};

export default ChatFooter;
