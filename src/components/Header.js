import React from 'react';
import '../App.css'

const Header = () => {
    return(
        <header className='header-wrapper'>
            <div className='header-content'>
              <div className='logo-link'>
                <a href="main">
                   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/1200px-VK.com-logo.svg.png' alt='some image'/>
                </a>
              </div>            
            </div>
        </header>
    )
};

export default Header;