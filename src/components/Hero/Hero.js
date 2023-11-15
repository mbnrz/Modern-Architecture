import React from "react";
import "./Hero.css";
import photo2 from "../../assets/images/3.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup/build";

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="innerWidth paddings flexCenter hero-container">
          <div className="hero-left flexColStart">
            <div className="hero-title">
              <div className="orange-circle" />
              <h1>
                Discover <br />
                Most Suitable <br />
                Property
              </h1>
            </div>
            <div className="hero-desc flexColStart">
              <p className="secondaryText2">
                Find a variety of properties that suit you very easily
              </p>
              <p className="secondaryText2">
                Forget all difficulties in finding a residence for you
              </p>
            </div>
            <div className="flexCenter searchBar">
              <HiLocationMarker color={"var(--blue)"} size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp
                    className="CountUp"
                    start={8800}
                    end={9000}
                    duration={4}
                  />
                  <span className="plus">+</span>
                </span>
                <span className="secondaryText">Premium Product</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp
                    className="CountUp"
                    start={1950}
                    end={2000}
                    duration={4}
                  />
                  <span className="plus">+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp className="CountUp" end={28} />
                  <span className="plus">+</span>
                </span>
                <span className="secondaryText">Awards Winning</span>
              </div>
            </div>
          </div>
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src={photo2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
