import React from 'react';
import styles from './Content.module.css';
import Post from '../post/Post';
import UserInfo from '../user-info/UserInfo';
import Textarea from '../text-area/Textarea';

const Content = () => {
    return(
        <div className={styles.wrapper}>     
        <UserInfo username='Jack Wilson'/> 
        <Textarea/>
        <div className='posts-container'>
          <Post number={1} likes={1}/>
          <Post number={2} likes={25}/>
          <Post number={3} likes={230}/>
        </div>      
      </div>
    )
};

export default Content;