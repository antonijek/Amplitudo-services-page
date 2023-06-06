import React from "react";
import "./address.css";

const Address = () => {
  return (
    <div className="address">
      <a href="https://amplitudo.me/contact" target="blanc">
        <p className="address__street">
          Boulevard of St. Petar Cetinjski 56 Podgorica, Montenegro
        </p>
        <hr className="address__line" />
        info@amplitudo.me
        <br />
        +382 20 223 244
      </a>
    </div>
  );
};

export default Address;
