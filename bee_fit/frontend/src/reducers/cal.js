import { GET_PRODUCTS, FIND_PRODUCTS, PRODUCT_DETAILS } from "../actions/types";

export default function(state = {}, action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return { ...state, Products: action.payload};
        case FIND_PRODUCTS: 
            return { ...state, Products: action.payload};
        case PRODUCT_DETAILS: 
            return { ...state, Products: action.payload};
        default:
            return state;
    }
}