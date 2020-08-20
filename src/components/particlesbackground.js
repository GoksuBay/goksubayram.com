import React, {Component} from 'react';
import Particles from 'react-particles-js';
import '../css/background.css';

class ParticlesBackground extends Component {
  render () {
    return (
      <div id='particle-canvas'>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.1
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 2.5
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1.5,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
  </div>
);
  }
}

export default ParticlesBackground;
