import {CREATE_POST, DELETE_POST, SEND_MESSAGE, UPDATE_POST} from "./actions";

export const profileReducer = (state, action) => {
    switch (action.type) {
        case CREATE_POST:
            console.log('received new post: ' + action.payload.message);
            state.push({
                content: action.payload.message
            });
            break;
        case UPDATE_POST:
            console.log('received request to update post with id: ' + action.payload.index);
            state.splice(action.payload.index, 1,
                {content: action.payload.message});
            break;
        case DELETE_POST:
            console.log('received request to delete post with index: ' + action.payload.index);
            state.splice(action.payload.index, 1);
            break;
        default:
            break;
    }
    return state;
};

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            state.map((user, index) => {
                if (index === action.payload.userIndex) {
                    state[index].messages.push(action.payload.message);
                }
            });
            break;
        default:
            break;
    }
    return state;
};