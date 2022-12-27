import React from "react";
import ChatFooter from "./ChatFooter";
import "./Chat.css";
import { Alert, Navbar, Button, Nav } from "react-bootstrap";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core/";

const ChatBody = ({ username, messages, socket, room, lastMessageRef }) => {
  return (
    <>
      <Grid item md={9}>
        <List className="message-area">
          <Alert variant="dark">
            <Alert.Heading>
              Hey, nice to see you {username}, Welcome to Stud Chat.
            </Alert.Heading>
            <p>
              Stud Chat is one of the core function of Stud App to facilitate
              communication and collaboration among students.
            </p>
            <hr />
            <p className="mb-0">
              How about a discussion on A.I or a popular person like Elon Musk?
            </p>
          </Alert>
          {messages.map((message) => (
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    secondary={
                      message.username == username ? "You" : message.username
                    }
                    align={message.username == username ? "right" : "left"}
                  ></ListItemText>
                  <ListItemText
                    align={message.username == username ? "right" : "left"}
                    primary={message.message}
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText
                    align={message.username == username ? "right" : "left"}
                    secondary={message.time}
                  ></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          ))}
          <div ref={lastMessageRef}></div>
        </List>
        <Divider variant="middle" />
        <Divider />
        <ChatFooter username={username} socket={socket} room={room} />
      </Grid>
    </>
  );
};

export default ChatBody;
