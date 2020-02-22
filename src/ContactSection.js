import React from 'react';

function ContactSection() {
  return (
    <div className='inline-block'>
      <h className='gold-text'>KONTAKT</h>
      <div>
        <div>Hattingen Hair Transplantation</div>
        <div>Schwertstrasse 4</div>
        <div>CH – 8200 Schaffhausen</div>
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
  );
}

export default ContactSection;
