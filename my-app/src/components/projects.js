import React, {Component} from 'react';
import {Card, CardText, CardTitle, CardMenu, CardActions, Button} from 'react-mdl';
import '../css/project.css';


class Projects extends Component {
  render() {
    return(
    <div>
      <div className="project">
      /* PROJECT 1 */

      <Card shadow={0} style={{width: '415px', margin:'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
              <Button colored>Get Started</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
      </Card>

      /*PROJECT 2*/
      <Card shadow={0} style={{width: '415px', margin:'auto', background:'#201274'}}>
          <CardTitle style={{background: '#000', color: '#fff', height: '176px', background: 'url(https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2020/02/298194/screenshot_1.png?itok=etrHdLYl&timestamp=1580650221) center / cover no-repeat'}}>Welcome</CardTitle>
          <CardText style={{color: '#fff'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
              <Button style={{color:"#fff"}} target="_blank" rel="noopener noreferrer" href="https://globalgamejam.org/2020/games/fix-if-you-can-1">Get Started</Button>
          </CardActions>
          <CardMenu style={{color: '#000'}}>
          </CardMenu>
      </Card>

      /*PROJECT 3*/
      <Card shadow={0} style={{width: '415px', margin:'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
          <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
              <Button colored>Get Started</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
      </Card>
      </div>

    </div>
    );
  }
}

export default Projects;
