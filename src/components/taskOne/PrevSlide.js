import React from 'react'
import PropTypes from 'prop-types';
import arrow from '../../assets/icons/arrow-left-circle.svg';
import '../../assets/css/Carousel.css';

export default function PrevSlide(props) {
  function handleClick() {
    props.onClick();
  }
  return (
    <button type='button' onClick={handleClick} className='invisible-btn'>
      <img src={arrow} alt='Prev' className='carousel-control prev-slide' />
    </button>
  );
}

PrevSlide.propTypes = {
  onClick: PropTypes.func.isRequired,
}
