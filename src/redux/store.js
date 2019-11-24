import {combineReducers, createStore} from "redux";
import {dialogsReducer, profileReducer} from "./reducers";

let reducers = combineReducers({
    postState: profileReducer,
    dialogState: dialogsReducer
});

export default createStore(reducers);