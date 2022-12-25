import React, { useEffect, useState, useRef } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

import { Container } from "react-bootstrap";
import { Navbar, Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

// MaterialUI
import { Paper, Grid, Typography, Fab } from "@material-ui/core/";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Chat.css";

const Chat = ({ username, socket, room }) => {
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
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
      <Navbar
        expand="sm"
        bg="light"
        className="fixed-top"
        style={{
          boxShadow: `0 1px 60px rgba(0,0,0,.25)`,
        }}
      >
        <Container>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Navbar.Brand>
                <img className="logo-header-chat" src="stud-logo.svg" />
              </Navbar.Brand>
            </LinkContainer>
          </Nav>
          <Fab
            color="primary"
            className="leave-btn"
            aria-label="add"
            onClick={handleLeaveChat}
          >
            <LogoutIcon />
          </Fab>
        </Container>
      </Navbar>
      <div className="table">
        <Grid container component={Paper} className="chat-section">
          <ChatBar socket={socket} username={username}></ChatBar>
          <ChatBody
            username={username}
            messages={messages}
            room={room}
            socket={socket}
            lastMessageRef={lastMessageRef}
          />
        </Grid>
      </div>
    </>
  );
};

export default Chat;
