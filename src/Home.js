import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Circles from './Circles';
import MiniGalery from './MiniGalery';

function Home() {
  const [video, setVideo] = useState(false);

  let settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    arrows: false,
    autoplaySpeed: 500,
    slidesToShow: 1,
    autoplay: true
  };
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
        <Slider {...settings}>
          <div>
            <img
              className='wide-img'
              src='images/shutterstock_-28.png'
              alt=''
            />
          </div>
          <div>
            <img
              className='wide-img'
              src='images/shutterstock_-29.png'
              alt=''
            />
          </div>
          <div>
            <img
              className='wide-img'
              src='images/shutterstock_-30.png'
              alt=''
            />
          </div>
        </Slider>
      </div>
      <div className='wide relative'>
        <div className='text'>
          Haare gehören zu dem, was uns mit als erstes auffällt, wenn wir
          jemanden kennen lernen. Sie sind ein essentieller Teil unseres
          Erscheinungsbildes und das Sinnbild von Jugend, Gesundheit und
        </div>
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
      <div className='wide white'>
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
        <img className='telescope' alt='' src='images/teleskop2.png' />
        <MiniGalery />
      </div>
      <div className='wide rocks'>
        <div>
          Haare gehören zu dem, was uns mit als erstes auffällt, wenn wir
          jemanden kennen lernen. Sie sind ein essentieller Teil unseres
          Erscheinungsbildes und das Sinnbild von Jugend, Gesundheit und
        </div>
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
        <Circles />
      </div>
    </div>
  );
}

export default Home;
