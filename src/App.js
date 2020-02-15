import React from 'react';
import Home from './Home';
import About from './About';
import Footer from './Footer';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { Helmet } from 'react-helmet';

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
        <Navbar bg='light' expand='lg'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavItem className='nav-link' href='/' to='/'>
                <Link to='/'>Home</Link>
              </NavItem>
              <NavItem className='nav-link' href='/about' to='/'>
                {' '}
                <Link to='/about'>About</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <About />
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
