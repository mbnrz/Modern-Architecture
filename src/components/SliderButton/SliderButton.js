import React from "react";
import "./SliderButton.css";
import { useSwiper } from "swiper/react";

const SliderButton = () => {
  const swiper = useSwiper();
  return (

    <div className="r-button flexCenter">
      <br />
      <button onClick={() => swiper.slidePrev()} >
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} >
        &gt;
      </button>
    </div>
  );
};

export default SliderButton;
