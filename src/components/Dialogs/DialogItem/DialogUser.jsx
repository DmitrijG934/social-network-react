import React from 'react';
import styles from './DialogUser.module.css';
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {
    return (
        <div className={styles.dialogItem}>
            <div className={styles.profileImg}>
                <img src={props.imgSrc} alt=""/>
            </div>
                <NavLink
                    to={`/messages/${props.index + 1}`}
                    activeClassName={styles.activeLink}
                    className={styles.nameCaption}>
                  {props.username}
                </NavLink>
        </div>
    )
};

export default DialogUser;