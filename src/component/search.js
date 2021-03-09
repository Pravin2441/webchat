import React from "react";
import searchImage from "./images/search.png";

const search = () => {
  return (
    <div className="search">
      <input type="text" name="" classname="searchArea" />

      <img src={searchImage} alt="Search" />
    </div>
  );
};

export default search;
