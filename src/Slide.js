import React from 'react';
import { Link } from 'react-router-dom';

function Slide() {
  return (
    <div className='wide'>
      <div className='small-img'>
        <img src='./images/shutterstock_-24.png' alt='' />
      </div>
      <div className='small-img'>
        <img src='./images/beispiel.png' alt='' />
        <Link className='beispiel' to='/galerie'>
          button
        </Link>
      </div>
      <div className='small-img'>
        <img src='./images/shutterstock_-31.png' alt='' />
      </div>
      <div className='small-img'>
        <img src='./images/shutterstock_-28.png' alt='' />
      </div>
      <div className='small-img'>
        <img src='./images/shutterstock_-23.png' alt='' />
      </div>
    </div>
  );
}

export default Slide;
