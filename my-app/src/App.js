import React, {Component} from 'react';
import logo from './logo.svg';
import Header from './components/headers.js';
import Footer from './components/footer.js'
import './css/App.css';
//import './css/background.css';
import Main from './components/main.js';
import Particles from 'react-particles-js';
import ParticlesBackground from './components/particlesbackground.js';

class App extends Component {
  render() {

      return (

        <div className="App">

          <Header/>
          <Main/>
          <Footer/>
          <ParticlesBackground/>
        </div>
      );

  }
}

export default App;
