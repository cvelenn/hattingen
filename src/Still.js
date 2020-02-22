import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';

function Still() {
  const [video, setVideo] = useState(false);
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
        <img className='wide-img' src='images/dreh19a.png' alt='' />
      </div>
      <div className='wide rocks'>
        <div>Haare gehören zu dem, was uns mit als erstes auffällt</div>
        <div className='relative'>
          <img className='wide strip' alt='' src='images/shutterstock_-4.png' />
          <div className='mac'>
            <img src='images/Mac-Video.png' alt='' />
            <img
              src='images/play.png'
              className='play'
              alt=''
              onClick={() => setVideo(true)}
            />
            {video && (
              <div className='video-container'>
                <ReactPlayer
                  className='video'
                  width='100%'
                  height='100%'
                  url='https://www.youtube.com/watch?v=YNB-JD7iPoQ'
                  playing='false'
                  controls='true'
                  onEnded={() => {
                    setVideo(false);
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className='wide'>
          <div>
            <div className='left-panel-still'>
              <img className='width-50' src='images/mendl.png' alt='' />
            </div>
            <div className='right-panel-still picture-text'>
              <div>title</div>
              <div>text</div>
            </div>
          </div>
          <div>
            <div className='left-panel-still picture-text'>
              <div>title</div>
              <div>text</div>
            </div>
            <div className='right-panel-still'>
              <img className='width-50' src='images/saegebrecht.png' alt='' />
            </div>
          </div>
          <div>
            <div className='left-panel-still'>
              <img
                className='width-50'
                src='images/sandraFleckenstein.png'
                alt=''
              />
            </div>
            <div className='right-panel-still picture-text'>
              <div>title</div>
              <div>text</div>
            </div>
          </div>
          <div>
            <div className='left-panel-still picture-text'>
              <div>title</div>
              <div>text</div>
            </div>
            <div className='right-panel-still'>
              <img className='width-50' src='images/borner.png' alt='' />
            </div>
          </div>
        </div>
        <div className='wide'>
          <img className='wide-img' src='images/dreh1.png' alt='' />
        </div>
        <div className='wide rocks'>
          <div>
            Haare gehören zu dem, was uns mit als erstes auffällt, wenn wir
          </div>
        </div>
        <div className='wide rocks related-container'>
          <img className='related' src='images/Image -1.png' alt='' />
          <img className='related' src='images/Image 2.png' alt='' />
          <img className='related' src='images/Image 3.png' alt='' />
          <img className='related' src='images/Image -1.png' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Still;
