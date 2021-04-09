import React from 'react';
import loader from '../assets/icons/dash-circle-dotted.svg';
import '../assets/css/Loader.css';

export default function Loader() {
  return (
    <div className='loader'>
      <img src={loader} alt='Loading' />
    </div>
  )
}
