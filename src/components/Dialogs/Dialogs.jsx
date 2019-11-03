import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "../Messages/Message";
import user_data from "../../data/data_array";

const Dialogs = (props) => {
    return (
        <div className={styles.dialogsContentWrapper}>
            <div>
                {user_data
                    .users
                    .map((user, index) =>
                        <DialogItem
                            imgSrc={user.img}
                            key={index} index={index} username={user.username}/>)}
            </div>
            <div>
                {user_data
                    .users
                    .map(userData =>
                        userData.messages.map((message, index) =>
                            <Message key={index} author={userData.username}
                                     message={message}
                                     creationDate={new Date().toDateString()}
                            />
                        ))}
            </div>
        </div>
    )
};

export default Dialogs;