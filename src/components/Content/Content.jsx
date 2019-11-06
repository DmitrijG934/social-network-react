import React from 'react';
import styles from './Content.module.css';
import Post from '../Post/Post';
import UserInfo from '../UserInfo/UserInfo';
import TextArea from '../TextArea/TextArea';
import {getRandomLikesNumber} from "../../utils/utils";

const Content = (props) => {
    return (
        <div className={styles.mainContentWrapper}>
            <UserInfo username='Jack Wilson'/>
            <TextArea/>
            <div className='posts-container'>
                {props.posts.map((post, index) => <Post key={index}
                                                             likes={getRandomLikesNumber(150)}
                                                             content={post.content}
                                                             number={++index}/>)}
            </div>
        </div>
    )
};

export default Content;
