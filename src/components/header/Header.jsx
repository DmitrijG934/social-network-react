import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.content}>
              <div className={styles.logo}>
                <a href="main">
                   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/1200px-VK.com-logo.svg.png' alt='some image'/>
                </a>
              </div>            
            </div>
        </header>
    )
};

export default Header;