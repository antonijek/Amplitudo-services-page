import React from "react";
import "./footer.css";
import SocialIcons from "./SocialIcons";
import Address from "./Address";
import LogoAndName from "./LogoAndName";
import HelloMessage from "./HelloMessage";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__question">interested in our services</p>
      <h2 className="footer__contact">contact us</h2>
      <div className="footer__background-img">
        <HelloMessage />
        <LogoAndName />
        <Address />
      </div>
      <p className="footer__social-media">Follow us on social media</p>
      <SocialIcons />
      <p className="footer__rights">
        © All rights reserved 2019 Amplitudo Ltd.
      </p>
    </footer>
  );
};

export default Footer;
