import { GET_PRODUCTS, FIND_PRODUCTS } from "../actions/types";

export default function(state = {}, action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return { ...state, CaloriesProducts: action.payload};
        case FIND_PRODUCTS: 
            return { ...state, CaloriesProducts: action.payload};
        default:
            return state;
    }
}