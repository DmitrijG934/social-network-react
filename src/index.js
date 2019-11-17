import * as serviceWorker from './serviceWorker';
import {createPost, deletePost, editPost, state, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import React from "react";

let renderDocument = (state) => {
    ReactDOM.render(
        <App appState={state}
             createPost={createPost}
             removePost={deletePost}
             editPost={editPost}
        />, document.getElementById('root')
    )
};

renderDocument(state);
subscribe(renderDocument);
serviceWorker.unregister();
