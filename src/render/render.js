import ReactDOM from "react-dom";
import React from 'react';
import '../index.css';
import App from "../App";
import {createPost, deletePost, editPost} from "../redux/state";

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App appState={state}
             createPost={createPost}
             removePost={deletePost}
             editPost={editPost}
        />, document.getElementById('root')
    );
};