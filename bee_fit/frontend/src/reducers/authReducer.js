import { AuthTypes } from "../constants/actionsTypes";

export default function(state = {}, action) {
    switch(action.type) {
        case AuthTypes.LOGIN:
            return { 
                ...state, 
                authenticated: true, 
                token: action.payload, 
                user: action.payload};
        case AuthTypes.LOGOUT:
            return { 
                ...state, 
                authenticated: false, 
                token: null};
        case AuthTypes.USER_PROFILE:
            return { 
                ...state, 
                user: action.payload, 
                userCalorieGoal:action.payload};
        case AuthTypes.GET_HEALTH_DATA:
        case AuthTypes.UPDATE_HEALTH_DATA:
            return {
                ...state, 
                userCalorieGoal:action.payload }
    }
    return state;
}