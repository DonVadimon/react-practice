import React from 'react'
import PropTypes from 'prop-types';

export default function BackButton(props) {
  function handleClick(event) {
    props.handleParent(event.target.id)
  }
  return (
    <div className='back-button-container'>
      <button type='button' onClick={handleClick} className='back-button'>Back</button>
    </div>
  )
}

BackButton.propTypes = {
  handleParent: PropTypes.func.isRequired,
}
