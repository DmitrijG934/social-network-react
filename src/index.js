import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render/render";
import {state} from "./redux/state";

rerenderEntireTree(state);
serviceWorker.unregister();
