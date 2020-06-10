import { MessTypes } from '../constants/actionsTypes';

const initialState = {

};

export default function (state = initialState, action) {
    switch (action.type) {
        case MessTypes.GET_MESSAGES:
            return action.payload;
        case MessTypes.CREATE_MESSAGE:
            return (state = action.payload)
        default:
            return state;
    }
}