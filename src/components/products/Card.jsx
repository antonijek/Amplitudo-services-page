import React from "react";
import "./card.css";

const Card = ({ title, description, img }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <hr className="card__green-line" />
      <p className="card__description">{description}</p>
      <img src={img} alt="" className="card__img" />
    </div>
  );
};

export default Card;
