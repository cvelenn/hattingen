import React from 'react';
import ContactSection from './ContactSection';
import FollowUs from './FollowUs';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import getStrings from './localization';

function Footer() {
  return (
    <div className='footer'>
      <ContactSection />

      <div className='inline-block'>
        <h className='gold-text h'>LINK</h>
        <div>
          <Link to='/transplantation'>{getStrings('Hairtransplatation')}</Link>
        </div>
        <div>
          <Link to='/#hairfall'>{getStrings('Herausfall')}</Link>
        </div>
        <div>
          <HashLink to='/transplantation#preis'>{getStrings('Preis')}</HashLink>
        </div>
        <div>
          <Link to='/faq'>{getStrings('FAQ')}</Link>
        </div>
        <div>
          <Link to='/galerie'>{getStrings('Galerie')}</Link>
        </div>
      </div>

      <div className='inline-block'>
        <h className='gold-text h'>{getStrings('TERMINVEREINBAREN')}</h>
        <div>{getStrings('Beratung')}</div>
        <div>{getStrings('Onlineberatung')} </div>
        <div>{getStrings('Skypeberatung')} </div>
        <div>{getStrings('Rückrufservice')} </div>
        <div>{getStrings('Beratungsorte')} </div>
      </div>

      <FollowUs className='header-follow-us' />
    </div>
  );
}

export default Footer;
