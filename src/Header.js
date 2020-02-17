import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  function handleClickOutside() {
    if (show) {
      setShow(false);
    }
  }
  return (
    <div className='header wide'>
      <img className='wide line' src='/images/Rectangle.png' alt='' />

      <div className='menu-container'>
        {!show && (
          <img
            className='hamburger'
            src='/images/hamburger.png'
            alt=''
            onClick={e => {
              setShow(true);
            }}
          />
        )}
        {show && (
          <img
            className='hamburger'
            src='/images/x.png'
            alt=''
            onClick={e => {
              setShow(false);
            }}
          />
        )}
        <img className='logo' src='/images/Logo.png' alt='' />
        {!show && (
          <img
            className='line-menu wide line-menu-up'
            src='/images/Rectangle.png'
            alt=''
          />
        )}
        {show && (
          <img
            className='line-menu wide line-menu-down'
            src='/images/Rectangle.png'
            alt=''
          />
        )}
        {show && (
          <div className='wide'>
            <div className='page-item'>
              <Link className='white-text' to='/'>
                Home
              </Link>
            </div>
            <div className='page-item'>
              <Link className='white-text' to='/about'>
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
