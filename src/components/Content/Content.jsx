import React from 'react';
import styles from './Content.module.css';
import Post from '../Post/Post';
import UserInfo from '../UserInfo/UserInfo';
import TextArea from '../TextArea/TextArea';
import {getRandomLikesNumber} from "../../data/utils";
import data_array from "../../data/data_array";

export default class Content extends React.Component {
    state = {
        posts: [...data_array.posts]
    };

    deletePost(index) {
        let updatedPosts = [...this.state.posts];
        updatedPosts.splice(index, 1);
        this.setState({
            posts: updatedPosts
        });
    }

    render() {
        return (
            <div className={styles.mainContentWrapper}>
                <UserInfo username='Jack Wilson'/>
                <TextArea/>
                <div className='posts-container'>
                    {this.state.posts.map((post, index) => <Post key={index}
                                                                 onDelete={this.deletePost.bind(this, index)}
                                                                 likes={getRandomLikesNumber(150)}
                                                                 content={post.content}
                                                                 number={++index}/>)}
                </div>
            </div>
        )
    };
};
