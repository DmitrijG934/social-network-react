import React from 'react';
import styles from './Textarea.module.css';

const TextArea = (props) => {
    let newPostReference = React.createRef();

    const createNewPost = () => {
        debugger;
        props.createPost(newPostReference.current.value);
        newPostReference.current.value = '';
    };

    return(
        <div className={styles.textareaWrapper}>
            <span className={styles.newPostCaption}>Add new post: </span>
            <textarea ref={newPostReference} className={'input-group mt-1 mb-3'}/>
            <button onClick={createNewPost} className="btn btn-primary">Add post</button>
        </div>
    )
};

export default TextArea;