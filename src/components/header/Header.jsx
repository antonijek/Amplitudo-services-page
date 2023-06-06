import React from "react";
import "./header.css";
import logoImage from "../../assets/images/Group 1.svg";

const Header = () => {
  const navList = [
    "Home",
    "Services",
    "StartUp",
    "Career",
    "Company",
    "Blog",
    "cg",
  ];
  return (
    <div className="container">
      <nav className="container__navbar">
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            {navList.map((item, index) => (
              <li key={index}>
                <a href="#" className="menu__item">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="https://amplitudo.me/" target="blank" className="navbar__logo">
          <img src={logoImage} />
        </a>

        <ul className="navbar__item-list">
          {navList.map((item, index) => (
            <li
              key={index}
              className={
                item === "Services"
                  ? "navbar__item--underline"
                  : item === "cg"
                  ? "navbar__item--language"
                  : "navbar__item"
              }
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
