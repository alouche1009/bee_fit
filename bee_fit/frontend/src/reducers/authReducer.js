import { AuthTypes } from "../constants/actionsTypes";
import { GET_PROFILE_DATA, UPDATE_PROFILE_DATA} from "../actions/types"

export default function(state = {}, action) {
    switch(action.type) {
        case AuthTypes.LOGIN:
            return { ...state, authenticated: true, token: action.payload, user: action.payload};
        case AuthTypes.LOGOUT:
            return { ...state, authenticated: false, token: null};
        case AuthTypes.USER_PROFILE:
            return { ...state, user: action.payload, userCalorieGoal:action.payload};
        case GET_PROFILE_DATA:
        case UPDATE_PROFILE_DATA:
            return {...state, userCalorieGoal:action.payload }
    }
    return state;
}