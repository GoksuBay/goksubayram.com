import React, {Component} from 'react';
import {Card, CardText, CardTitle, CardMenu, CardActions, Button} from 'react-mdl';
import '../css/project.css';
import ggj from './photo/screenshot_1.png';
import fp from './photo/fp.jpg';
import logo from './photo/mainpage.png';


class Projects extends Component {
  render() {
    return(
    <div>
      <div className="project">

      <Card id="cards" shadow={0} style={{margin:'auto', background:'#072637'}}>
          <CardTitle id="sisago"style={{color: '#072637', height: '176px'}}>Sisago</CardTitle>
          <CardText style={{color: '#fff'}}>
              Java Project for Apartment Managements. Reads receipts and check if it is paid.
              Includes: JavaFX, MySQL, and Java.
          </CardText>
          <CardActions border>
              <Button style={{color:"#fff"}} target="_blank" rel="noopener noreferrer" href="https://github.com/Scankiran/CSE102-Project">Github</Button>
          </CardActions>
          <CardMenu style={{color: '#000'}}>
          </CardMenu>
      </Card>


      <Card id="cards" shadow={0} style={{margin:'auto', background:'#072637'}}>
          <CardTitle style={{background: '#000', color: '#072637', height: '176px', background: 'url('+ggj+') center / cover no-repeat'}}>Fix If You Can</CardTitle>
          <CardText style={{color: '#fff'}}>
              An hypercasual PC game made for Global Game Jam. Used Godot Engine and GDScript.

          </CardText>
          <CardActions border>
              <Button style={{color:"#fff"}} target="_blank" rel="noopener noreferrer" href="https://globalgamejam.org/2020/games/fix-if-you-can-1">Go to the Page</Button>
          </CardActions>
          <CardMenu style={{color: '#000'}}>
          </CardMenu>
      </Card>


    <Card id="cards" shadow={0} style={{margin:'auto', background:'#072637'}}>
        <CardTitle id="milis" style={{color: '#fff', height: '176px'}}>Milis Linux OS</CardTitle>
        <CardText style={{color: '#fff'}}>
            Worked on Milis Package System called "MPS" for Milis Linux OS.

        </CardText>
        <CardActions border>
            <Button style={{color:"#fff"}} target="_blank" rel="noopener noreferrer" href="https://mls.akdeniz.edu.tr">Go to the Page</Button>
        </CardActions>
        <CardMenu style={{color: '#000'}}>
        </CardMenu>
    </Card>
      </div>

      <div className="project">

      <Card id="cards"shadow={0}  style={{margin:'auto', background:'#072637'}}>
          <CardTitle id="brdb"style={{color: '#072637', height: '176px'}}>BRDB</CardTitle>
          <CardText style={{color: '#fff'}}>
              Books and Reviewing Website Project.
              Used: PHP, MYSQL.
          </CardText>
          <CardActions border>
              <Button style={{color:"#fff"}} target="_blank" rel="noopener noreferrer" href="https://github.com/GoksuBay/BookDB">Github</Button>
          </CardActions>
          <CardMenu style={{color: '#000'}}>
          </CardMenu>
      </Card>

      <Card id="cards" shadow={0} style={{margin:'auto', background:'#072637'}}>
          <CardTitle style={{background: '#000', color: '#FFF', height: '176px', background: 'url('+fp+') center / cover no-repeat'}}>Localization</CardTitle>
          <CardText style={{color: '#fff'}}>
              Was a member of a team to translate Finding Paradise into Turkish.

          </CardText>
          <CardActions border>
              <Button style={{color:"#fff"}} target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/337340/Finding_Paradise">Steam Page</Button>
          </CardActions>
          <CardMenu style={{color: '#000'}}>
          </CardMenu>
      </Card>

      <Card id="cards" shadow={0} style={{margin:'auto', background:'#072637'}}>
          <CardTitle id="website" style={{ color: '#000', height: '176px'}}>goksubayram.com</CardTitle>
          <CardText style={{color: '#fff'}}>
              The website you are browsing. My first ReactJS project.
              You may get source code of the project on GitHub.

          </CardText>
          <CardActions border>
              <Button style={{color:"#fff"}} target="_blank" rel="noopener noreferrer" href="https://github.com/GoksuBay/goksubayram.com">GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#000'}}>
          </CardMenu>
      </Card>



      </div>

    </div>
    );
  }
}

export default Projects;
