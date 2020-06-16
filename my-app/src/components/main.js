import React, {Component} from 'react';
import Landing from './landing.js';
import {Switch, Route} from 'react-router-dom';
import About from './about.js';
import Contact from './contact.js';
import Projects from './projects.js';
import ParticlesBackground from './particlesbackground.js';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import '../css/main.css';

const NoMatchPage = () => {
  return (
    <h3 className="npm" style={{color: 'white'}}>Whoops! Page doesn't exist.</h3>
  );
};

class Main extends Component {


  render() {
    return(
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NoMatchPage} />
        </Switch>
    );
  }
}

export default Main;
