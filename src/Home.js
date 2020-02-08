import React from 'react';
import {Helmet} from 'react-helmet'

function Home() {
    return <h2>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="This is what you want to show as the page content in the Google SERP Listing" />
        </Helmet>
        Home
    </h2>;
}

export default Home;