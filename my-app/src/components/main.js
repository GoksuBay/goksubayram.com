import React, {Component} from 'react';
import Landing from './landing.js';
import {Switch, Route} from 'react-router-dom';
import About from './about.js';
import Contact from './contact.js';
import Projects from './projects.js';
import ParticlesBackground from './particlesbackground.js';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import '../css/main.css';

class Main extends Component {
  render() {
    return(
      <TransitionGroup>
      <CSSTransition
      timeout={300}
      classNames="my-node"
      >
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
    );
  }
}

export default Main;
