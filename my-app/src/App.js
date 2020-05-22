import React, {Component} from 'react';
import logo from './logo.svg';
import Header from './components/headers.js';
import Footer from './components/footer.js'
import './App.css';
import './css/background.css';

class App extends Component {
  render() {
    return (
      <div className='fullscreen' id='background'>
      <Header/>
      <Footer/>
      </div>
    );
  }
}

export default App;
