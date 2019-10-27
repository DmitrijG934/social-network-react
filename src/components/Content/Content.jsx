import React from 'react';
import styles from './Content.module.css';
import Post from '../Post/Post';
import UserInfo from '../UserInfo/UserInfo';
import TextArea from '../TextArea/TextArea';

const Content = () => {
    return (
        <div className={styles.mainContentWrapper}>
            <UserInfo username='Jack Wilson'/>
            <TextArea/>
            <div className='posts-container'>
                <Post number={1} likes={1}/>
                <Post number={2} likes={25}/>
                <Post number={3} likes={230}/>
            </div>
        </div>
    )
};

export default Content;