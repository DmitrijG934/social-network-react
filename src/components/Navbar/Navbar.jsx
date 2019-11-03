import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.link}>
                <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/messages' activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;