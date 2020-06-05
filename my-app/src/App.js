import React, {Component} from 'react';
import Header from './components/headers.js';
import Footer from './components/footer.js'
import './css/App.css';
import Main from './components/main.js';
import ParticlesBackground from './components/particlesbackground.js';
import './css/firstlaunch.css';

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
