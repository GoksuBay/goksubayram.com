import React, {Component} from 'react';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './main.js';
import '../css/header.css';

class Headers extends Component {
  render() {
    return(
      <div className='headerlinks' style={{height: '100px', position: 'relative' }} >
      <Layout fixedHeader fixedLinks>
          <header className='header-color' scroll>
              <Navigation className='hlinks'>
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/projects">Projects</a>
                  <a href="/contact">Contact</a>
              </Navigation>
          </header>
      </Layout>
      </div>
      );
    }
}

export default Headers;
