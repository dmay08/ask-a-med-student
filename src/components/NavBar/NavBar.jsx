import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className='NavBar-wrap'>
            <div className='NavBar'>
                <span className='NavBar-welcome'>{props.user.name}</span>
                <h4>AMS</h4>
                <Link to='/' onClick={props.handleLogout} className='NavBar-link' >Log Out</Link>
            </div>
        </div>
    );
}

export default NavBar;