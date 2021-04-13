import React from "react";
import arrow from "../../assets/icons/arrow-left-circle.svg";
import "../../assets/css/Carousel.css";
import { ICarouselControlProps } from "./interfaces";

const PrevSlide: React.FC<ICarouselControlProps> = (
  props: ICarouselControlProps
) => (
  <button
    type="button"
    onClick={() => props.onClick()}
    className="invisible-btn"
  >
    <img src={arrow} alt="Prev" className="carousel-control prev-slide" />
  </button>
);

export default PrevSlide;
