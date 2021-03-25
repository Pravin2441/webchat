import React from "react";


const Profile = (props) => {
  return (
    <div>
    <div className="profile">
      <img src={props.img} alt="profile" />
      <p>{props.name}</p>
      </div>
  </div>
  );
};

export default Profile;
