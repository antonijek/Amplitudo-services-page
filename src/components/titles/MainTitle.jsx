import React from "react";
import "./mainTitle.css";

const MainTitle = ({ text }) => {
  return (
    <div>
      <div className="title">
        <p className="title__head">{text}</p>
      </div>
    </div>
  );
};

export default MainTitle;
