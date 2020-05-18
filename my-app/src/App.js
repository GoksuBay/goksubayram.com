import React from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main.js'
import {Link} from 'react-router-dom';
function App() {

      return (
        <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(https://allfreedesigns.com/wp-content/uploads/2015/06/black-patterns-4.jpg) center / cover'}}>
        <Header transparent scroll title=" " style={{color: 'white'}}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Main/>
        <Content />
    </Layout>
</div>
      );
}

export default App;
