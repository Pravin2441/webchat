import React from "react";
import Features from "./component/Features";
import ChatList from "./component/ChatList";
import ChatArea from "./component/ChatArea";
import "./App.css";
import "./responsive.css";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <div className="main-div">
          <Features />
          <ChatList />
          <ChatArea />
        </div>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
