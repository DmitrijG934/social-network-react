import React from 'react';
import styles from './styles/Content.module.css';
import Post from './Post';
import UserInfo from './UserInfo';

const Content = () => {
    return(
        <div className={styles.wrapper}>     
        <UserInfo username='Jack Wilson'/> 
        <div className='posts-container'>
          <Post number={1}/>
          <Post number={2}/>
          <Post number={3}/>
        </div>      
      </div>
    )
};

export default Content;