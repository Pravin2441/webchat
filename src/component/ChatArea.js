import React from "react";
import Profile from "./profile";
import Chatbox from "./chatbox";
import option from "./images/ChatHeaderOption.png";
const ChatArea = () => {
  return (
    <div className="ChatArea">
      <header>
        <button>
          <img src={option} className="headerOption"></img>
        </button>
        <Profile className="profile" />
        <Chatbox />
      </header>
    </div>
  );
};

export default ChatArea;
