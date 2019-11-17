import React from 'react';
import styles from './Textarea.module.css';
import {CREATE_POST, UPDATE_POST} from "../../redux/actions_types";

const TextArea = (props) => {
    let textAreaReference = React.createRef();

    const createNewPost = () => {
        props.dispatch({
            type: CREATE_POST,
            payload: {
                message: textAreaReference.current.value,
            }
        });
        cleanForm();
    };

    const updatePost = () => {
        props.dispatch({
            type: UPDATE_POST,
            payload: {
                message: textAreaReference.current.value,
                index: props.postId
            }
        });
        props.onEdit();
        cleanForm();
    };

    const cleanForm = () => {
        textAreaReference.current.value = '';
    };

    return (
        <div className={styles.textareaWrapper}>
            <span className={styles.newPostCaption}>{props.operationType} post: </span>
            <textarea ref={textAreaReference} className={'input-group mt-1 mb-3'}
                      defaultValue={props.operationType === 'Update' ? props.post : ''}
            />
            {props.operationType === 'Add' ?
                <button onClick={createNewPost} className="btn btn-primary">Add post</button>
                :
                <button onClick={updatePost} className="btn btn-primary">Update post</button>
            }
        </div>
    )
};

export default TextArea;