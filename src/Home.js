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
      <img class='fit' alt='' src='public\images\shutterstock_563427154.jpg' />
    </div>
  );
}

export default Home;
