import React from "react";
import "./hello-message.css";
import logo from "../../assets/images/Group392.png";
import smiley from "../../assets/images/sccpre.cat-angel-png-418236.png";
import dot from "../../assets/images/Group 421.svg";

const HelloMessage = () => {
  return (
    <div className="hello-container">
      <img className="hello-container__logo" src={logo} alt="" />
      <p className="hello-container__message">
        Hello from the center of the world!
      </p>
      <img className="hello-container__smiley" src={smiley} alt="" />
      <div className="hello-container__pointer"></div>
      <img className="hello-container__dot" src={dot} alt="" />
    </div>
  );
};

export default HelloMessage;
