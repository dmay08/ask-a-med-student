import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className='NavBar-wrap'>
            <div className='NavBar'>
                <div className="nav-thirds">
                    <span className='NavBar-welcome'>{props.user.name}</span>
                </div>
                <div className="nav-thirds" id="second">
                    <p>AMS</p>
                </div>
                <div className="nav-thirds" id="third">
                    <Link to='/' onClick={props.handleLogout} className='NavBar-link' >Log Out</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;