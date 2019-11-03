import React from 'react';
import styles from './Textarea.module.css';

export default class TextArea extends React.Component {
    render() {
        return (
            <div className={styles.textareaWrapper}>
                <span className={styles.newPostCaption}>Add new post: </span>
                <textarea className={'input-group mt-1 mb-3'}/>
                <button className="btn btn-primary">Add post +</button>
            </div>
        )
    }
};