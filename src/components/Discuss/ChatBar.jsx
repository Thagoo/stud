import React from "react";
import { useEffect, useState } from "react";
import "./Chat.css";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  Avatar,
  TextField,
} from "@mui/material/";

const ChatBar = ({ socket, username }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("room_users", (data) => {
      setUsers(data);
    });

    return () => socket.off("room_users");
  }, [socket]);
  return (
    <Grid item xs={3} className="chat-bar">
      <List className="chat-bar-user">
        <ListItem button key="user">
          <ListItemIcon>
            <Avatar alt={username} src={username} />
          </ListItemIcon>
          <ListItemText primary={username}></ListItemText>
          <ListItemText secondary="You" align="right"></ListItemText>
        </ListItem>
        <Divider variant="inset" />
        <Divider variant="inset" />
      </List>

      {users.map((user, i) =>
        user.username == username ? (
          ""
        ) : (
          <List>
            <ListItem button key={i}>
              <ListItemIcon>
                <Avatar alt={user.username} src={user.username} />
              </ListItemIcon>
              <ListItemText primary={user.username}>
                {user.username}
              </ListItemText>
              <ListItemText secondary="online" align="right"></ListItemText>
            </ListItem>
            <Divider variant="inset" />
          </List>
        )
      )}
    </Grid>
  );
};

export default ChatBar;
