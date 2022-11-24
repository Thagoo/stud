import React from "react";
import { useNavigate } from "react-router-dom";
import "./Chat.css";

const ChatBody = ({ username, messages, room, lastMessageRef }) => {
  const navigate = useNavigate();
  console.log(`body`, messages[2]);
  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/discuss");
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Discussion Room {room}</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          message.username === username ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.message}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.username}</p>
              <div className="message__recipient">
                <p>{message.message}</p>
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
