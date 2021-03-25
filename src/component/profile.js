import React from "react";
import logo from "./profile/save.png";
import vijay from "./profile/vijay.jpg";

const Profile = (props) => {
  return (
    <div>
    <div className="profile">
      <img src={vijay} alt="profile" />
      <p>{props.name}</p>
       
    </div>
 
    
    </div>
  );
};

export default Profile;
