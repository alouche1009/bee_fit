import { combineReducers } from 'redux'
import { reducer as formReducer } from "redux-form";
import { reducer as notifReducer } from 'redux-notifications';

import errors from './errorsReducer';
import messages from './messagesReducer'
import auth from './authReducer'; 
import product from "./productReducer";
import nutrition from "./nutrition"

const rootReducer = combineReducers({
    form: formReducer,
    notifs: notifReducer,
    errors,
    messages,
    product,
    auth,
    nutrition,
});

export default rootReducer;