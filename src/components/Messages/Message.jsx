import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    return(
        <div className={styles.messagesWrapper}>
            <div className={styles.messageInfo}>
                <span className={styles.authorInfoSpan}>{props.author}</span>
                <span className={styles.dateInfoSpan}>({props.creationDate})</span>
            </div>
            <span className={styles.messageSpan}>{props.message}</span>
            <hr/>
        </div>
    )
};

export default Message;