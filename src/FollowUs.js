import React from 'react';
import getStrings from './localization';

function FollowUs() {
  return (
    <div className='inline-block padding-top-2'>
      <div className='gold-text follow-us'>{getStrings('FollowUs')}</div>
      <div>
        <a href='/'>{getStrings('FACEBOOK')}</a>
      </div>
      <div>
        <a href='/'>{getStrings('INSTAGRAM')}</a>
      </div>
    </div>
  );
}

export default FollowUs;
