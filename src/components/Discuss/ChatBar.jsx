import React from "react";
import { useEffect, useState } from "react";
import "./Chat.css";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("room_users", (data) => {
      setUsers(data);
    });
    return () => socket.off("room_users");
  }, [socket]);
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users"></div>

        {users.map((user) => (
          <p>{user.username}</p>
        ))}
      </div>
    </div>
  );
};

export default ChatBar;
