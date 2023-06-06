import React from "react";
import "./products.css";
import Card from "./Card";
import tvImg from "../../assets/images/Group 1098.png";
import towerImg from "../../assets/images/Group 1911.png";

const Products = () => {
  return (
    <div className="product-title">
      <p className="product-title__head">Take a look at</p>
      <p className="title__subtitle">our products</p>
      <div className="cards">
        <Card
          title="Via"
          description="Business travel automatization software."
          img={tvImg}
        />
        <Card
          title="Shift"
          description="Central base of transfered mobile and fixed numbers."
          img={towerImg}
        />
      </div>
    </div>
  );
};

export default Products;
