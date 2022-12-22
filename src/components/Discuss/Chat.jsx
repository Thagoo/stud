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
      <Container>
        <Navbar
          expand="sm"
          bg="light"
          className="fixed-top"
          style={{
            boxShadow: `0 2px 10px rgba(0,0,0,.25)`,
          }}
        >
          <Container>
            <Nav className="me-auto">
              <Navbar.Brand>
                <h1 className="stud-logo">STUD</h1>
              </Navbar.Brand>
            </Nav>
            <Navbar.Brand className="chat-nav-title">Discussion</Navbar.Brand>
            <Navbar.Brand>
              {localStorage.getItem("user").replace(/^"(.+)"$/, "@$1")}
            </Navbar.Brand>
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
      </Container>
    </>
  );
};

export default Chat;
