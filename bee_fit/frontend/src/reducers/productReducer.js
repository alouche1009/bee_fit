import { ProdTypes } from "../constants/actionsTypes";

export default function(state = {}, action) {
    switch(action.type) {
        case ProdTypes.GET_PRODUCTS:
            return { ...state, products: action.payload};
        case ProdTypes.FIND_PRODUCTS: 
            return { ...state, products: action.payload};
        case ProdTypes.PRODUCT_DETAILS: 
            return { ...state, products: action.payload};
        default:
            return state;
    }
}