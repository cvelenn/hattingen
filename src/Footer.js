import React from 'react';
import ContactSection from './ContactSection';
import FollowUs from './FollowUs';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <div className='footer'>
      <ContactSection />

      <div className='inline-block'>
        <h className='gold-text h'>LINK</h>
        <div>
          <Link to='/transplantation'>Haartransplantation</Link>
        </div>
        <div>
          <Link to='/#hairfall'>Herausfall</Link>
        </div>
        <div>
          <HashLink to='/transplantation#preis'>Preis</HashLink>
        </div>
        <div>
          <Link to='/faq'>FAQ</Link>
        </div>
        <div>
          <Link to='/galerie'>Galerie</Link>
        </div>
      </div>

      <div className='inline-block'>
        <h className='gold-text h'>TERMIN VEREINBAREN</h>
        <div>Persönliche Beratung</div>
        <div>Onlineberatung </div>
        <div>Skypeberatung </div>
        <div>Rückrufservice </div>
        <div>Weitere Beratungsorte </div>
      </div>

      <FollowUs className='header-follow-us' />
    </div>
  );
}

export default Footer;
