import { GET_USERS_INFOS, ADD_USERS_INFOS, DELETE_USERS_INFOS } from '../actions/types.js';

const initialState = {
    infos: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS_INFOS:
            return {
                ...state,
                infos: action.payload
            }
        case ADD_USERS_INFOS:
            return {
                ...state,
                infos: [...state.infos, action.payload]
            };
        case DELETE_USERS_INFOS:
            return {
                ...state,
                infos: state.infos.filter(info => info.id !== action.payload)
            };
        default:
            return state;
    }
}