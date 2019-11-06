import React from 'react';
import styles from './Textarea.module.css';

const TextArea = (props) => {
    let textAreaReference = React.createRef();

    const createNewPost = () => {
        props.createPost(textAreaReference.current.value);
        cleanForm();
    };

    const updatePost = () => {
        props.editPost(textAreaReference.current.value, props.postId);
        props.onEdit();
        cleanForm();
    };

    const cleanForm = () => {
        textAreaReference.current.value = '';
    };

    return (
        <div className={styles.textareaWrapper}>
            <span className={styles.newPostCaption}>{props.operationType} post: </span>
            <textarea ref={textAreaReference} className={'input-group mt-1 mb-3'}/>
            {props.operationType === 'Add' ?
                <button onClick={createNewPost} className="btn btn-primary">Add post</button>
                :
                <button onClick={updatePost} className="btn btn-primary">Update post</button>
            }
        </div>
    )
};

export default TextArea;