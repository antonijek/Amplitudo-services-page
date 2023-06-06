import React from "react";
import "./box.css";

const Box = ({ text, img }) => {
  return (
    <div className="box">
      <img src={img} alt="" className="box__img" />
      <p className="box__text">{text}</p>
    </div>
  );
};

export default Box;
