import { GET_USERS_INFOS, ADD_USERS_INFOS } from '../actions/types.js';
import { func } from 'prop-types';

const initialState = {
    users: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS_INFOS:
            return {
                ...state,
                users: action.payload
            }
        case ADD_USERS_INFOS:
            return {
                ...state,
                leads: [...state.users, action.payload],
            };
        default:
            return state;
    }
}