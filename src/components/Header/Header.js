/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import photo1 from "../../assets/images/logo1.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <a href="/">
            {" "}
            <img src={photo1} alt="logo" id="img" />
          </a>
          <div className="flexCenter h-menu">
            <a href="">Residencies</a>
            <a href=""> Our Value</a>
            <a href="">Content Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
