import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <div className='footer'>
      <div className='inline-block'>
        <h className='gold-text'>KONTAKT</h>
        <div className='max-width'>
          Hattingen Hair Transplantation Schwertstrasse 4 CH – 8200 Schaffhausen
        </div>
        <div>
          <span className='gold-text'>Phone:</span>
          <span> +41 (0) 52 659 53 50</span>
        </div>
        <div>
          <span className='gold-text'>FAX:</span>
          <span> +41 (0) 52 659 53 52</span>
        </div>
        <div>
          <span className='gold-text'>Email:</span>
          <span> Info@hattingenhair.com</span>
        </div>
      </div>

      <div className='inline-block'>
        <h className='gold-text'>LINK</h>
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
        <h className='gold-text'>TERMIN VEREINBAREN</h>
        <div>Persönliche Beratung</div>
        <div>Onlineberatung </div>
        <div>Skypeberatung </div>
        <div>Rückrufservice </div>
        <div>Weitere Beratungsorte </div>
      </div>

      <div className='inline-block padding-top-2'>
        <h className='gold-text follow-us'>Follow us</h>
        <div>
          <a href>FACEBOOK</a>
        </div>
        <div>
          <a href>INSTAGRAM</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
