import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './homepage.js';
import About from './about.js'
import Contact from './contact.js'
import Projects from './projects.js'

class Main extends Component {
render(){
  return(
  <Switch>
    <Route exact path ="/" component={HomePage} />
    <Route path='/about' component={About} />
    <Route path='/projects' component={Projects} />
    <Route path='/contact' component={Contact} />
  </Switch>
);
}
}

export default Main;
