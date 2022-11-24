import React from "react";
import "./Chat.css";

const ChatBar = () => {
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users"></div>
      </div>
    </div>
  );
};

export default ChatBar;
