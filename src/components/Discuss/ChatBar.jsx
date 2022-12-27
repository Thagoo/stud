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
} from "@material-ui/core/";

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
      <List>
        <ListItem button key="user">
          <ListItemIcon>
            <Avatar alt={username} src={username} />
          </ListItemIcon>
          <ListItemText primary={username}></ListItemText>
          <ListItemText secondary="You" align="right"></ListItemText>
        </ListItem>
        <Divider />
        <Divider />
      </List>
      {users.map((user) =>
        user.username == username ? (
          ""
        ) : (
          <List>
            <ListItem button key="user">
              <ListItemIcon>
                <Avatar alt={user.username} src={user.username} />
              </ListItemIcon>
              <ListItemText primary={user.username}>
                {user.username}
              </ListItemText>
              <ListItemText secondary="online" align="right"></ListItemText>
            </ListItem>
          </List>
        )
      )}
    </Grid>
  );
};

export default ChatBar;
