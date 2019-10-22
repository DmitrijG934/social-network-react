import React from 'react';
import '../App.css';

const Navbar = () => {
    return(
        <nav className='navbar-wrapper'>
        <div className='link'><a href='profile'>Profile</a></div>
        <div className='link'><a href='messages'>Messages</a></div>
        <div className='link'><a href='news'>News</a></div>
        <div className='link'><a href='music'>Music</a></div>
        <div className='link'><a href='settings'>Settings</a></div>
      </nav>
    )
};

export default Navbar;