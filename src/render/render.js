import ReactDOM from "react-dom";
import React from 'react';
import '../index.css';
import App from "../App";
import {createPost} from "../redux/state";

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App appState={state} createPost={createPost}/>, document.getElementById('root')
    );
};