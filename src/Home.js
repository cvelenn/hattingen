import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta
          name='description'
          content='This is what you want to show as the page content in the Google SERP Listing'
        />
      </Helmet>
      <div className='wide'>
        <img className='wide-img' src='images/main.jpg' alt='' />
      </div>
      <div className='wide'>
        <img className='wide-img' src='images/shutterstock_-15.png' alt='' />
        <img
          className='img-clock'
          src='images/shutterstock_259084145crop.png'
          alt=''
        />
      </div>
      <div className='wide'>
        <img
          className='haircut'
          src='images/shutterstock_568820404.png'
          alt=''
        />
        <img
          className='haircut-right'
          src='images/shutterstock_-1.png'
          alt=''
        />
      </div>
      <div className='wide'>
        <div className='middle'>
          <div className='third'>
            <img alt='' src='images/Group 3038.png' />
          </div>
          <div className='third'>
            <img alt='' src='images/Group 3131.png' />
          </div>
          <div className='third'>
            <img alt='' src='images/Group 3208.png' />
          </div>
        </div>
      </div>
      <div className='wide relative'>
        <img className='wide-img' alt='' src='images/microscope2.png' />
        <div className='middle-panel'>
          <div className='left-panel'>
            <img
              className='wide hover'
              alt=''
              src='images/shutterstock_-17.png'
            />
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
      </div>

      {/* <div className='container-overflow'>
        <div className='fit sec-2' />
        <div className='fit sec-2-img'></div>
      </div> */}
      {/* <div className='container-overflow'>
        <div className='fit sec-3' />
        <div className='fit sec-3-2' />
      </div> */}
    </div>
  );
}

export default Home;
