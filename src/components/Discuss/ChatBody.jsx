import React from "react";

import "./Chat.css";
import { Navbar, Button, Nav } from "react-bootstrap";

const ChatBody = ({ username, messages, room, lastMessageRef }) => {
  return (
    <>
      <div className="message__container">
        {messages.map((message) =>
          message.username === username ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.message}</p>
                <p className="message_time">{message.time}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.username}</p>
              <div className="message__recipient">
                <p>{message.message}</p>
                <p className="message_time">{message.time}</p>
              </div>
            </div>
          )
        )}
        <div ref={lastMessageRef}></div>
      </div>
    </>
  );
};

export default ChatBody;
