import React, {Component} from 'react';
import '../css/footer.css';
class Footer extends Component {
    render() {
        return(
            <div>
              <footer className='social-links'>
              <a href='http://linkedin.com/in/goksubay' rel='noopener noreferrer' target='_blank'>
                <i className='fab fa-linkedin-in'  aria-hidden='true' />
              </a>
              <a href='https://github.com/GoksuBay' rel='noopener noreferrer' target='_blank'>
                <i className='fab fa-github'  aria-hidden='true' />
              </a>
              <a href='https://twitter.com/Goksubayy' rel='noopener noreferrer' target='_blank'>
                <i className='fab fa-twitter'  aria-hidden='true' />
              </a>
              </footer>
            </div>
       )
    }
}

export default Footer;
