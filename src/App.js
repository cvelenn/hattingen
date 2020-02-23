import React from 'react';
import Home from './Home';
import Transplantation from './Transplantation';
import Still from './Still';
import Galery from './Galery';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <title>Here's the Title!</title>
          <meta
            name='description'
            content='This is what you want to show as the page content in the Google SERP Listing'
          />
        </Helmet>

        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/transplantation'>
            <Transplantation />
          </Route>
          <Route path='/still'>
            <Still />
          </Route>
          <Route path='/faq'>
            <FAQ />
          </Route>
          <Route path='/galerie'>
            <Galery />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
