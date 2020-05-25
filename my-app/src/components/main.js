import React, {Component} from 'react';
import Landing from './landing.js';
import {Switch, Route, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import About from './about.js';
import Contact from './contact.js';
import Projects from './projects.js';
import '../css/main.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ParticlesBackground from './particlesbackground.js';

class Main extends Component {
  static propTypes = {
        location: PropTypes.object.isRequired
      }
  render() {
    const {location} = this.props;
    return(
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        </Switch>



    );
  }
}

export default withRouter(Main);
