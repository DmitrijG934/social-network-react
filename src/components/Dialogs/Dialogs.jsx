import React from 'react';
import styles from './Dialogs.module.css';
import DialogUser from "./DialogItem/DialogUser";

const Dialogs = (props) => {
    let usersFromStore = props.users;

    return (
        <div className={styles.dialogsContentWrapper}>
            <div>
                {usersFromStore
                    .map((user, index) =>
                        <DialogUser
                            imgSrc={user.img}
                            key={index} index={index} username={user.username}/>)}
            </div>
        </div>
    )
};

export default Dialogs;