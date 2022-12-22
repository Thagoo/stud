import React, { useEffect, useState, useRef } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import "./Chat.css";
import { Container } from "react-bootstrap";
import { Navbar, Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Chat = ({ username, socket, room }) => {
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/discuss");
    window.location.reload();
  };

  useEffect(() => {
    socket.on("messageRes", (data) => {
      setMessages([...messages, data]);
    });
  });

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Navbar variant="dark" bg="dark">
        <Container fluid>
          <Nav className="me-auto">
            <Navbar.Brand>Discussion Room {room}</Navbar.Brand>
          </Nav>
          <Button size="sm" variant="secondary" onClick={handleLeaveChat}>
            LEAVE
          </Button>
        </Container>
      </Navbar>

      <div>
        <ChatBody
          username={username}
          messages={messages}
          room={room}
          lastMessageRef={lastMessageRef}
        />
        <ChatFooter username={username} socket={socket} room={room} />
      </div>
    </>
  );
};

export default Chat;
