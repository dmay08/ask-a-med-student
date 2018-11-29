import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className='NavBar'>
            <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
            <Link to='/' onClick={props.handleLogout} className='NavBar-link' >LOG OUT</Link>
        </div>
    );
}

export default NavBar;