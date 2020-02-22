import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Galery() {
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
        <img
          className='wide-img'
          src='images/shutterstock_675614251.png'
          alt=''
        />
      </div>
      <div className='wide'>
        <div className='slider-container'>
          <Slider {...settings}>
            <div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-23.png'
                  alt=''
                />
              </div>

              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-32.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-30.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-29.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-28.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-31.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-24.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-26.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_176125814.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-27.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-29.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-32.png'
                  alt=''
                />
              </div>
            </div>
            <div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-23.png'
                  alt=''
                />
              </div>

              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-32.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-30.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-29.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-28.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-31.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-24.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-26.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_176125814.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-27.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-29.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-32.png'
                  alt=''
                />
              </div>
            </div>
            <div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-23.png'
                  alt=''
                />
              </div>

              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-32.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-30.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-29.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-28.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-31.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-24.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-26.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_176125814.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-27.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-29.png'
                  alt=''
                />
              </div>
              <div className='img-gallery-container'>
                <img
                  className='img-gallery'
                  src='images/shutterstock_-32.png'
                  alt=''
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Galery;
