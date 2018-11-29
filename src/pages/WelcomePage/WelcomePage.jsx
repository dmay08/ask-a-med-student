import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

const Welcome = (props) => (
    <div className="Welcome">
        <h1>AMS</h1>
        <p>Ask a Med Student</p>
        <a href="">How it works</a>
        <br></br>
        <Link to='/login' className='NavBar-link'>Log In</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>Sign Up</Link>
    </div>
);

export default Welcome;