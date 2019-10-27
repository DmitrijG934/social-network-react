import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = (props) => {
    return(
        <div className={styles.userInfo}>
            <div className={styles.userAva}>
                <img src='https://sun9-8.userapi.com/c858416/v858416962/bcc6f/TS34rr12qwQ.jpg?ava=1'
                alt='some image'/>
            </div>
            <div className={styles.userName}>
                <span>{props.username}</span>
            </div>
        </div>
    )
};

export default UserInfo;