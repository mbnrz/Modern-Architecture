import React from "react";
import "./Hero.css";
import photo2 from "../../assets/images/3.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup/build";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x ">
        <div className="hero-title">
          <div className="orange-circle" />
          <h1 style={{ color: "white" }}>
            Discover <br />
            <span style={{color:"#ffa450"}}>Most Suitable</span> <br />
            Property
          </h1>
        </div>
        <p style={{color:"rgb(140 139 139)"}} className="font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Find a variety of properties that suit you very easily Forget all
          difficulties in finding a residence for you
        </p>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}} className="searchBar">
          <HiLocationMarker color={"var(--blue)"} size={25} />
          <input type="text" onclick="input.blur()" />
          <button style={{marginRight:"10px",marginLeft:"10px"}} className="button">Search</button>
        </div>
        <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span style={{color:"white"}}>
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
            <span style={{color:"white"}}>
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
            <span style={{color:"white"}}>
              <CountUp className="CountUp" end={28} />
              <span className="plus">+</span>
            </span>
            <span className="secondaryText">Awards Winning</span>
          </div>
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-10  bg-hero bg-cover bg-center ">
        <div className="image-container" style={{marginRight:"40px"}}>
          <img
            className=" relative z-10 "
            src={photo2}
            width={610}
            height={500}
          />
        </div>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6"></div>
      </div>
    </section>
  );
};

export default Hero;
