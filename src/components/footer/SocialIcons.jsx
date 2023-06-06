import React from "react";
import "./social-icons.css";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/Group 394.svg";
import linkedIn from "../../assets/images/Group395.png";
import twiter from "../../assets/images/twitter.png";
import be from "../../assets/images/Group396.png";

const SocialIcons = () => {
  return (
    <div className="socials">
      <a href="https://amplitudo.me/" target="_blank" rel="noreferrer">
        <img className="socials__icon" src={facebook} alt="" />
      </a>
      <a href="https://amplitudo.me/" target="_blank" rel="noreferrer">
        <img className="socials__icon" src={instagram} alt="" />
      </a>
      <a href="https://amplitudo.me/" target="_blank" rel="noreferrer">
        <img className="socials__icon" src={linkedIn} alt="" />
      </a>
      <a href="https://amplitudo.me/" target="_blank" rel="noreferrer">
        <img className="socials__icon" src={twiter} alt="" />
      </a>
      <a href="https://amplitudo.me/" target="_blank" rel="noreferrer">
        <img className="socials__icon" src={be} alt="" />
      </a>
    </div>
  );
};

export default SocialIcons;
