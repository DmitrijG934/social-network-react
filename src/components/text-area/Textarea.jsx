import React from 'react';
import styles from './Textarea.module.css';

const Textarea = () => {
    return(
        <div className={styles.textareaWrapper}>
            <span className={styles.newPostCaption}>Add new post: </span>
            <textarea/>
            <button>Add post</button>
        </div>
    )
};

export default Textarea;