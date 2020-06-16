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
              <h1>About Me</h1>
            </div>
          </Cell>
        <Cell col={6}>
              <p>Hey There!<br></br><br></br>
              I am Göksu Bayram and Computer Engineering student at Akdeniz University. Living in Antalya right now.<br></br><br></br>
              I am a programmer who is interested in Artificial Intelligence, Game Programming, Linux Distros and so. Experienced with many programming languages such as C++, Java, Python, LUA, C#...
              <br></br><br></br>
              Improving on Game Engines, C++ Programming Language, Artificial Intelligence and Operating Systems.
              </p>
          </Cell>
          <Cell col={6}>
                <p>My programming journey started when I was 12 years old, that day I wanted to make my own games and started learning GameMaker Engine. After some practise, I made my first game, there was an labyrinth and character need to find the key to escape from the labyrinth, but there were ghosts as well which can kill the character. <br></br><br></br>
                My second game was a platformer game, the character needed to reach the goal. After these small projects, I noticed that I love programming, and decided to be a Programmer (and Computer Engineer). Told this to my uncle who is IT teacher and he bought me a C++ book to learn it. This is how my journey started.
                </p>
            </Cell>

            <Cell col={6} id="lastP">
                  <p>After that day, I had some small projects, such as modding a game with LUA and managing a server. In university, I worked on Milis Package System called MPS for Milis Linux OS, these job experience made me fan of Linux Distros and decided to work on Linux.<br></br><br></br>
                  Now I am really happy to work on programming because that is my dreamjob. I am making my dream come true.
                  </p>
              </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
