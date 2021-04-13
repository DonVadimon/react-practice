import React from "react";
import arrow from "../../assets/icons/arrow-right-circle.svg";
import "../../assets/css/Carousel.css";
import { ICarouselControlProps } from "./interfaces";

const NextSlide: React.FC<ICarouselControlProps> = (
  props: ICarouselControlProps
) => (
  <button
    type="button"
    onClick={() => props.onClick()}
    className="invisible-btn"
  >
    <img src={arrow} alt="Next" className="carousel-control next-slide" />
  </button>
);

export default NextSlide;
