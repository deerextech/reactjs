import React, { Component } from 'react';
import './App.css';
import ArtGallery from './components/ArtGallery'
import HomePage from './components/Home';
import AboutPage from './components/About';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends Component {

  render() {

    return (


      <Router>
          <div className="app-container">
            <header className="app-header">
              <h1><Link to={`/`}> DeerexArt</Link>
              <p>Artist, Coder, Part-time Genie</p>
            </h1>

              <div className="nav-container">

                <ul className="navigation">
                  <li><Link to={`/about`}>About </Link></li>
                  <li><Link to={`/gallery`}> Gallery </Link></li>
                </ul>
              </div>
            </header>

          <div className="component-container">
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/gallery' component={ArtGallery} />
          </div>

        </div>
        </Router>
    );
  }
}

export default App;
