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
  function handleClickOutside(e) {
    if (e.target.className.indexOf('ignore') !== -1) {
      return;
    }
    if (show) {
      setShow(false);
    }
  }
  return (
    <div className='header wide'>
      <img className='wide line' src='/images/Rectangle.png' alt='' />

      <div
        className='menu-container ignore'
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className='header-part'>
          {!show && (
            <img
              className='hamburger ignore'
              src='/images/hamburger.png'
              alt=''
              onClick={e => {
                setShow(true);
              }}
            />
          )}
          {show && (
            <img
              className='hamburger x ignore'
              src='/images/x.png'
              alt=''
              onClick={e => {
                setShow(false);
              }}
            />
          )}
          <Link className='white-text' to='/'>
            <img className='logo ignore' src='/images/Logo.png' alt='' />
          </Link>
          <img
            className='line-menu wide line-menu-down ignore'
            src='/images/Rectangle.png'
            alt=''
          />
        </div>
        {show && (
          <div className='wide body-part ignore'>
            <div className='links ignore'>
              {/* <div className='page-item'>
                <Link className='white-text' to='/'>
                  Home
                </Link>
              </div> */}
              <div className='page-item ignore'>
                <Link
                  className='white-text ignore'
                  to='/transplantation'
                  onClick={e => {
                    setShow(false);
                  }}
                >
                  Hairtransplatation
                </Link>
              </div>
              <div className='page-item ignore'>
                <Link
                  className='white-text ignore'
                  to='/still'
                  onClick={e => {
                    setShow(false);
                  }}
                >
                  Stille
                </Link>
              </div>
              <div className='page-item ignore'>
                <Link
                  className='white-text ignore'
                  to='/faq'
                  onClick={e => {
                    setShow(false);
                  }}
                >
                  FAQ
                </Link>
              </div>
              <div className='page-item ignore'>
                <Link
                  className='white-text ignore'
                  to='/galerie'
                  onClick={e => {
                    setShow(false);
                  }}
                >
                  Galerie
                </Link>
              </div>
              <div className='page-item ignore'>
                <Link
                  className='white-text ignore'
                  to='/contact'
                  onClick={e => {
                    setShow(false);
                  }}
                >
                  Contact
                </Link>
              </div>
              <div className='page-item ignore'>
                <div
                  className='gold-text follow-us ignore'
                  onClick={e => {
                    setShow(false);
                  }}
                >
                  Follow us{' '}
                  <a className='ignore' href='/'>
                    FACEBOOK
                  </a>{' '}
                  <a className='ignore' href='/'>
                    INSTAGRAM
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
