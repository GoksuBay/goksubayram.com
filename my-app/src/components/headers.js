import React, {Component} from 'react';
import {Layout, Navigation, Content} from 'react-mdl';
import Main from './main.js';
import '../css/header.css';
import {Link} from 'react-router-dom';

class Headers extends Component {
  render() {
    return(
      <div className='headerlinks' style={{height: '100px', position: 'relative' }} >
      <Layout fixedHeader fixedLinks>
          <header className='header-color' scroll>
              <Navigation className='hlinks'>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/portfolio">Portfolio</Link>
                  <Link to="/contact">Contact</Link>

              </Navigation>
          </header>
      </Layout>
      </div>
      );
    }
}

export default Headers;
