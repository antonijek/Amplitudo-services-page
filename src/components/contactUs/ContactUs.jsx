import React from "react";
import "./contact-us.css";
import BlueButton from "./BlueButton";
import parrot from "../../assets/images/Group 1052.png";
import MainTitle from "../titles/MainTitle";

const ContactUs = () => {
  return (
    <div className="contact">
      <p className="contact__title">Like what you see?</p>
      <p className="contact__description">Let's talk about it.</p>
      <BlueButton text="contact us" />
      <img src={parrot} alt="parrot" className="contact__img" />
    </div>
  );
};

export default ContactUs;
