import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.link}>
                <div className={styles.iconEl}>
                    <img src="https://image.flaticon.com/icons/png/128/149/149071.png" alt=""/>
                </div>
                <div className={styles.captionEl}>
                    <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
                </div>
            </div>
            <div className={styles.link}>
                <div>
                    <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/mail-128.png" alt=""/>
                </div>
                <div>
                    <NavLink to='/messages' activeClassName={styles.activeLink}>Messages</NavLink>
                </div>
            </div>
            <div className={styles.link}>
                <div>
                    <img src="https://image.flaticon.com/icons/png/128/149/149366.png" alt=""/>
                </div>
                <div>
                    <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
                </div>
            </div>
            <div className={styles.link}>
                <div>
                    <img src="https://c7.uihere.com/icons/111/396/840/listening-6d551d3509ecd92969e2d3a4cc7f9ba0.png"
                         alt=""/>
                </div>
                <div>
                    <NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink>
                </div>
            </div>
            <div className={styles.link}>
                <div>
                    <img src="https://cdn1.iconfinder.com/data/icons/video-controls/32/setup-128.png" alt=""/>
                </div>
                <div>
                    <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;