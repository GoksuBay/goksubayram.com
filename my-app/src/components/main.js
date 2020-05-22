import React, {Component} from 'react';
import Landing from './landing.js';
import {Switch, Route} from 'react-router-dom';
import About from './about.js';
import Contact from './contact.js';
import Projects from './projects.js';

class Main extends Component {
  render() {
    return(
      <Switch>
        <Route exact path ="/" component={Landing} />
        <Route path ="/contact" component={Contact} />
        <Route path ="/about" component={About} />
        <Route path ="/projects" component={Projects} />
      </Switch>
    );
  }
}

export default Main;
