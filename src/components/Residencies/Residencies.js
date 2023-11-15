import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import axios from "axios";
import { Card } from "react-bootstrap";
import { SliderSetting } from "../../utils/SliderSetting";
import SliderButton from "../SliderButton/SliderButton";
import { DataSlider } from "../../utils/DataSlider";

const Residencies = () => {
  
  return (
    <section className="r-wrapper">
      <div className="r-container paddings innerWidth">
        <div style={{ marginBottom: "2rem" }} className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...SliderSetting}>
        <SliderButton/>
          {DataSlider.map((data) => (
            <SwiperSlide key={data.id}>
              <Card className="flexColCenter r-card" style={{ border: "none" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>
                    <span className="orangeText">$</span>
                    <span
                      style={{ fontWeight: "bold", color: "rgb(140 139 139)" }}
                    >
                      {data.price}
                    </span>
                  </Card.Title>
                  <h4
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#1f3e72",
                    }}
                  >
                    {data.name}
                  </h4>
                  <Card.Text className="secondaryText">{data.detail}</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
