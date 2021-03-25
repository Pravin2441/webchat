import React from "react";
import Profile from "./profile";
import Chatbox from "./chatbox";
import option from "./images/ChatHeaderOption.png";
import back from "./images/back.png";
import save from "./profile/save.png";
const ChatArea = () => {
  return (
    <div className="ChatArea">
      <header>
        <img src={option} className="headerOption" alt="headerOption"></img>
        <img src={back} alt="back" className="headerBack" />
        <Profile className="profile" />
      </header>

      <footer>
        <Chatbox />
      </footer>
    </div>
  );
};

export default ChatArea;
