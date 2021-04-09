import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NextSlide from './NextSlide';
import PrevSlide from './PrevSlide';
import '../../assets/css/Carousel.css';

export default function CarouselSlide({ image, episode, prevSlide, nextSlide }) {
  const [toggle, setToggle] = useState(false);
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    function renderAnimation() {
      return toggle ? setAnimation(1) : setAnimation(0);
    }
    renderAnimation();
  }, [toggle]);

  function startStopAnimation() {
    setToggle(!toggle);
  }

  function handleRightArrowClick() {
    startStopAnimation();
    nextSlide();
  }

  function handleLeftArrowClick() {
    startStopAnimation();
    prevSlide();
  }

  return (
    <div>
      <section className='carousel'>
        <div
          toggle={toggle}
          animation={animation}
          className='carousel-slide'
          style={{
            backgroundImage: `url(${image})`,
          }}>
          <div className='slide-info'>
            <div className='episode-main-info'>
              <h2>{episode?.title}</h2>
              <div>Seson: {episode?.season} Episode: {episode?.episode}</div>
              <div>{episode?.series}</div>
              <div>
                Air date:
                <p>{episode?.air_date.replace(/-/g, '.')}</p>
              </div>
            </div>
            <div className='character-list'>
              <h3>Characters</h3>
              <ul>
                {
                  episode?.characters.map((char) => <li>{char}</li>)
                }
              </ul>
            </div>
          </div>
        </div>
        <PrevSlide onClick={handleLeftArrowClick} />
        <NextSlide onClick={handleRightArrowClick} />
      </section>
    </div>
  )
}

CarouselSlide.propTypes = {
  episode: PropTypes.shape({
    title: PropTypes.string,
    episode: PropTypes.string,
    characters: PropTypes.arrayOf(PropTypes.string),
    air_date: PropTypes.string,
    series: PropTypes.string,
    season: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired
}
