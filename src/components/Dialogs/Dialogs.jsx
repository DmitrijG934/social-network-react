import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "../Messages/Message";

const users = [
    'Jack Wilson', 'Alex Nolan', 'Jessie Ventura',
    'Mark Zukerberg', 'Arnold Schwarzenegger', 'Bon Jovie'
];

const Dialogs = (props) => {
    return (
        <div className={styles.dialogsContentWrapper}>
            <div>
                {users
                    .map((username, index) =>
                        <DialogItem key={index} index={index} username={username}/>)}
            </div>
            <div>
                {users.map((username, index) =>
                    <Message key={index} author={username} message={'Hello, world!'}
                             creationDate={new Date().toDateString()}/>)}
            </div>
        </div>
    )
};

export default Dialogs;