import React from 'react';

function MiniGalery() {
  return (
    <div className='middle-panel'>
      <div className='left-panel'>
        <img className='wide hover' alt='' src='images/shutterstock_-17.png' />
      </div>
      <div className='right-panel right-panel-main'>
        <div className='up-panel'>
          <img
            className='wide padding hover'
            alt=''
            src='images/swish0504.png'
          />
        </div>
        <div className='down-panel'>
          <div className='left-panel'>
            <img
              className='wide padding hover'
              alt=''
              src='images/swish1280.png'
            />
          </div>
          <div className='right-panel'>
            <img
              className='wide padding hover'
              alt=''
              src='images/swish1578.png'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniGalery;
