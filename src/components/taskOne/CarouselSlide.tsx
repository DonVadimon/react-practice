import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { prevSlide, nextSlide } from "../../Redux/breakingBadSlice";
import {
  selectEpisodeByIndex,
  selectImageByIndex,
} from "../../Redux/selectors";
import NextSlide from "./NextSlide";
import PrevSlide from "./PrevSlide";
import "../../assets/css/Carousel.css";

const CarouselSlide: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [animation, setAnimation] = useState<number>(0);
  const currentImg = useAppSelector((state) => state.breakingBad.currentImg);
  const image = useAppSelector((state) =>
    selectImageByIndex(state, currentImg)
  );
  const currentEpisode = useAppSelector(
    (state) => state.breakingBad.currentEpisode
  );
  const episode = useAppSelector((state) =>
    selectEpisodeByIndex(state, currentEpisode)
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const renderAnimation = () => setAnimation(toggle ? 1 : 0);
    renderAnimation();
  }, [toggle]);

  const startStopAnimation = () => {
    setToggle((prev) => !prev);
  };

  const handleRightArrowClick = () => {
    startStopAnimation();
    dispatch(nextSlide());
  };

  const handleLeftArrowClick = () => {
    startStopAnimation();
    dispatch(prevSlide());
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
