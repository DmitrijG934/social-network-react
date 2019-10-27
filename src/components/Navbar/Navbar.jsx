import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={styles.navbar}>
        <div className={styles.link}><a href='profile'>Profile</a></div>
        <div className={styles.link}><a href='messages'>Messages</a></div>
        <div className={styles.link}><a href='news'>News</a></div>
        <div className={styles.link}><a href='music'>Music</a></div>
        <div className={styles.link}><a href='settings'>Settings</a></div>
      </nav>
    )
};

export default Navbar;