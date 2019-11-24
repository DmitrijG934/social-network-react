export const CREATE_POST = "CREATE_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const addPostActionCreator = (message) => {
    return {
        type: CREATE_POST,
        payload: {
            message: message
        }
    }
};

export const deletePostActionCreator = (index) => {
    return {
        type: DELETE_POST,
        payload: {index}
    }
};

export const updatePostActionCreator = (message, index) => {
    return {
        type: UPDATE_POST,
        payload: {message, index}
    }
};

export const sendMessageActionCreator = (message, userIndex) => {
    return {
        type: SEND_MESSAGE,
        payload: {
            message, userIndex
        }
    }
};