import React from 'react'
import PropTypes from 'prop-types';
import arrow from '../../assets/icons/arrow-right-circle.svg';
import '../../assets/css/Carousel.css';

export default function NextSlide(props) {
  function handleClick() {
    props.onClick();
  }
  return (
    <button type='button' onClick={handleClick} className='invisible-btn'>
      <img src={arrow} alt='Next' className='carousel-control next-slide' />
    </button>
  );
}

NextSlide.propTypes = {
  onClick: PropTypes.func.isRequired,
}
