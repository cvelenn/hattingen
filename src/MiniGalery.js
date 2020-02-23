import React from 'react';
import { HashLink } from 'react-router-hash-link';

function MiniGalery() {
  return (
    <div className='middle-panel'>
      <div className='left-panel'>
        <HashLink to='/contact'>
          <img
            className='wide hover img-left'
            alt=''
            src='images/shutterstock_-17.png'
          />
        </HashLink>
      </div>
      <div className='right-panel'>
        <div className='up-panel'>
          <HashLink to='/transplantation'>
            <img className='wide hover ' alt='' src='images/swish0504.png' />
          </HashLink>
        </div>
        <div className='down-panel'>
          <div className='left-panel'>
            <HashLink to='/faq'>
              <img className='wide hover' alt='' src='images/swish1280.png' />
            </HashLink>
          </div>
          <div className='right-panel'>
            <HashLink to='/galerie'>
              <img className='wide hover' alt='' src='images/swish1578.png' />
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniGalery;
