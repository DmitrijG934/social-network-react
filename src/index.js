import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import React from "react";

let renderDocument = (state) => {
    ReactDOM.render(
        <App appState={state}
             createPost={store.createPost.bind(store)}
             removePost={store.deletePost.bind(store)}
             editPost={store.updatePost.bind(store)}
        />, document.getElementById('root')
    )
};

renderDocument(store.getState());
store.subscribe(renderDocument);
serviceWorker.unregister();
