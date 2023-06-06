import React from "react";
import "./logo-and-name.css";
import logo1 from "../../assets/images/Group 1.svg";

const LogoAndName = () => {
  return (
    <a href="https://amplitudo.me/" target="blank" className="logo-container">
      <img className="logo-container__img" src={logo1} alt="" />
      <p className="logo-container__logo-text">amplitudo</p>
    </a>
  );
};

export default LogoAndName;
