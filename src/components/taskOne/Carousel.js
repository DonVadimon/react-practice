import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react'
import carouselImages from './carouselImages';
import CarouselSlide from './CarouselSlide';
import Loader from '../Loader';

export default function Carousel({ load, onLoad }) {
  const [breakingBadData, setBreakingBadData] = useState([]);
  const [currentImg, setCurrentImg] = useState(0);
  const imgLength = carouselImages.length;
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const [epsLength, setEpsLength] = useState(0);
  const [loading, setLoading] = useState(load);

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/episodes')
      .then((data) => data.json())
      .then((data) => {
        setBreakingBadData(data);
        setEpsLength(data.length);
        setLoading(false);
        onLoad();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function nextSlide() {
    setCurrentImg((currentImg + 1) % imgLength);
    setCurrentEpisode((currentEpisode + 1) % epsLength);
  }

  function prevSlide() {
    setCurrentImg((currentImg + imgLength - 1) % imgLength);
    setCurrentEpisode((currentEpisode + epsLength - 1) % epsLength);
  }

  return (
    <div>
      {
        loading ?
          <Loader /> :
          <CarouselSlide image={carouselImages[currentImg].image}
            episode={breakingBadData[currentEpisode]}
            prevSlide={prevSlide}
            nextSlide={nextSlide} />
      }
    </div>
  );
}

Carousel.defaultProps = {
  load: true,
}

Carousel.propTypes = {
  load: PropTypes.bool,
  onLoad: PropTypes.func.isRequired
}
