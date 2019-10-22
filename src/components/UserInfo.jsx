import React from 'react';
import styles from './styles/UserInfo.module.css';

const UserInfo = (props) => {
    return(
        <div className={styles.userInfo}>
            <div className={styles.userAva}>
                <img src='https://iisy.fi/wp-content/uploads/2018/08/user-profile-male-logo.jpg'
                alt='some image'/>
            </div>
            <div className={styles.userName}>
                <span>{props.username}</span>
            </div>
        </div>
    )
};

export default UserInfo;