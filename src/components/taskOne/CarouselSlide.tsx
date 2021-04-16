import React, { useState, useEffect } from "react";
import NextSlide from "./NextSlide";
import PrevSlide from "./PrevSlide";
import "../../assets/css/Carousel.css";
import { ICarouselSlideProps } from "./interfaces";

const CarouselSlide: React.FC<ICarouselSlideProps> = ({
  image,
  episode,
  prevSlide,
  nextSlide,
}: ICarouselSlideProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [animation, setAnimation] = useState<number>(0);

  useEffect(() => {
    const renderAnimation = () => (toggle ? setAnimation(1) : setAnimation(0));
    renderAnimation();
  }, [toggle]);

  const startStopAnimation = () => {
    setToggle((prev) => !prev);
  };

  const handleRightArrowClick = () => {
    startStopAnimation();
    nextSlide();
  };

  const handleLeftArrowClick = () => {
    startStopAnimation();
    prevSlide();
  };

  return (
    <div>
      <section className="carousel">
        <div
          data-animation={animation}
          className="carousel-slide"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="slide-info">
            <div className="episode-main-info">
              <h2>{episode?.title}</h2>
              <div>
                Seson: {episode?.season} Episode: {episode?.episode}
              </div>
              <div>{episode?.series}</div>
              <div>
                Air date:
                <p>{episode?.air_date.replace(/-/g, ".")}</p>
              </div>
            </div>
            <div className="character-list">
              <h3>Characters</h3>
              <ul>
                {episode?.characters.map((char) => (
                  <li key={char}>{char}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <PrevSlide onClick={handleLeftArrowClick} />
        <NextSlide onClick={handleRightArrowClick} />
      </section>
    </div>
  );
};

export default CarouselSlide;
