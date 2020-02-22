import React from 'react';
import FAQElement from './FAQElement';
import { Helmet } from 'react-helmet';
import Circles from './Circles';
import MiniGalery from './MiniGalery';

function FAQ() {
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
          src='images/shutterstock_551317642.png'
          alt=''
        />
      </div>
      <div className='wide rocks faq-container'>
        <FAQElement question='question' answer='answer' id='1' />
        <FAQElement question='question' answer='answer' id='2' />
        <FAQElement question='question' answer='answer' id='3' />
        <FAQElement question='question' answer='answer' id='4' />
        <FAQElement question='question' answer='answer' id='5' />
        <FAQElement question='question' answer='answer' id='6' />
        <FAQElement question='question' answer='answer' id='7' />
        <FAQElement question='question' answer='answer' id='8' />
      </div>
      <div className='wide relative'>
        <img className='telescope' alt='' src='images/teleskop2.png' />
        <MiniGalery />
      </div>
      <Circles />
    </div>
  );
}

export default FAQ;
