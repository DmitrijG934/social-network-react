import React from 'react';
import styles from './DialogUser.module.css';
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {
    return (
        <ul className="list-group mt-2">
            <li className="list-group-item">
                    <img style={{
                        width: '38px',
                        borderRadius: '50%',
                        height: '38px',
                        marginRight: '10px'
                    }} src={props.imgSrc} alt=""/>
                <NavLink
                    to={`/messages/${props.index + 1}`}
                    activeClassName={styles.activeLink}
                    className={styles.nameCaption}>
                    {props.username}
                </NavLink>
            </li>
        </ul>
    )
};

export default DialogUser;