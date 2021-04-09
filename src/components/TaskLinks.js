import React from 'react'
import PropTypes from 'prop-types'

export default function TaskLinks(props) {
  const links = [
    {
      id: 1,
      text: 'Task One',
    }
  ]

  function handleClick(event) {
    props.handleParent(event.target.id)
  }

  return (
    <div className='task-links-container'>
      {links.map((link) => (
        <button
          type='button'
          key={link.id}
          id={link.id}
          onClick={handleClick}
          className='task-link'
        >
          {link.text}
        </button>
      ))}
    </div>
  )
}

TaskLinks.propTypes = {
  handleParent: PropTypes.func.isRequired,
}
