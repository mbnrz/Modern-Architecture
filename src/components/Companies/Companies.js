import React from "react";
import "./Companies.css";
import photo3 from "../../assets/images/2.png";
import photo4 from "../../assets/images/6.png";
import photo5 from "../../assets/images/10.png";
import photo6 from "../../assets/images/11.png";

const Companies = () => {
  return (
    <div className="paddings innerWidth flexCenter Companies">
      <img src={photo3} />
      <img src={photo4} />
      <img src={photo5} />
      <img src={photo6} />
    </div>
  );
};

export default Companies;
