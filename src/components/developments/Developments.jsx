import React from "react";
import "./developments.css";
import Box from "./Box";
import locomotiveImg from "../../assets/images/Group 1045.svg";

const Developments = () => {
  return (
    <div className="developments">
      <p className="developments__title">You might be interested</p>
      <div className="boxes">
        <Box img={locomotiveImg} text="Mobile apps development" />
        <Box img={locomotiveImg} text="Website development" />
        <Box img={locomotiveImg} text="SaaS" />
      </div>
    </div>
  );
};

export default Developments;
