import { combineReducers } from 'redux'
import { reducer as formReducer } from "redux-form";
import errors from './errorsReducer';
import messages from './messagesReducer'
import auth from './authReducer'; 
import product from "./productReducer";
import calories from "./calorieReducer"

const rootReducer = combineReducers({
    form: formReducer,
    errors,
    messages,
    product,
    auth,
    calories,
});

export default rootReducer;