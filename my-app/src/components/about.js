import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import '../css/about.css';
class About extends Component {
  render() {
    return(
      <div className="about"style={{width: '100%', margin: 'auto'}}>
        <Grid className="grid">
          <Cell col={12}>
            <div className="header">
              <h1>Who am I?</h1>
            </div>
          </Cell>
        <Cell col={6}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus quam eu nisi cursus, mattis dapibus arcu eleifend. Duis ante dui, hendrerit at lobortis eget, accumsan vitae nulla. Curabitur a urna orci. Maecenas sed sapien nunc. Duis sit amet nulla suscipit, lobortis massa iaculis, dignissim diam. Aenean non tortor vel ex auctor ultricies. Morbi at quam fermentum, tristique nisi at, varius nisl. Pellentesque facilisis molestie faucibus. Nulla odio ligula, porta non lacinia vel, maximus finibus dolor. Etiam luctus erat quis nisl accumsan dictum. Sed porttitor pulvinar sapien nec aliquet. Integer sed lacinia dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at metus finibus, bibendum erat in, rhoncus ligula.</p>
          </Cell>
          <Cell col={6}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus quam eu nisi cursus, mattis dapibus arcu eleifend. Duis ante dui, hendrerit at lobortis eget, accumsan vitae nulla. Curabitur a urna orci. Maecenas sed sapien nunc. Duis sit amet nulla suscipit, lobortis massa iaculis, dignissim diam. Aenean non tortor vel ex auctor ultricies. Morbi at quam fermentum, tristique nisi at, varius nisl. Pellentesque facilisis molestie faucibus. Nulla odio ligula, porta non lacinia vel, maximus finibus dolor. Etiam luctus erat quis nisl accumsan dictum. Sed porttitor pulvinar sapien nec aliquet. Integer sed lacinia dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at metus finibus, bibendum erat in, rhoncus ligula.</p>
            </Cell>

            <Cell col={6} id="lastP" style={{
        position: 'relative', left: '25%', 
    }}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus quam eu nisi cursus, mattis dapibus arcu eleifend. Duis ante dui, hendrerit at lobortis eget, accumsan vitae nulla. Curabitur a urna orci. Maecenas sed sapien nunc. Duis sit amet nulla suscipit, lobortis massa iaculis, dignissim diam. Aenean non tortor vel ex auctor ultricies. Morbi at quam fermentum, tristique nisi at, varius nisl. Pellentesque facilisis molestie faucibus. Nulla odio ligula, porta non lacinia vel, maximus finibus dolor. Etiam luctus erat quis nisl accumsan dictum. Sed porttitor pulvinar sapien nec aliquet. Integer sed lacinia dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at metus finibus, bibendum erat in, rhoncus ligula.</p>
              </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
