import React from "react";
import "./introduction.css";
import locomotive from "../../assets/images/Group 1045.svg";

const Introduction = () => {
  return (
    <div className="locomotive">
      <img src={locomotive} alt="" className="locomotive__img" />

      <p className="locomotive__text">
        <span className="text-part">
          We are one of the few companies which create their own products, and
          we are proud to mention SHIFT and eTenderi.
        </span>
        <span className="text-part">
          We make software according to your wishes and needs. Our team of
          dedicated programmers and IT professionals will create an easy-to-use
          solution for you, with unique user experience and attractive design.
        </span>
        <span className="text-part">
          So far we have met the requirements of the following clients: Agency
          for electronical communications and postal services, Societe Generale
          bank, Ministry of Economy, Ministry of Justice, Volcano and others.
        </span>
      </p>
    </div>
  );
};

export default Introduction;
