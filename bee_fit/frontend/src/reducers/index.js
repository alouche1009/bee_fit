import { combineReducers } from 'redux'
import { reducer as formReducer } from "redux-form";
import { reducer as notifReducer } from 'redux-notifications';

import errors from './errors';
import messages from './messages'
import auth from './auth'; 

const rootReducer = combineReducers({
    form: formReducer,
    notifs: notifReducer,
    auth,
    errors,
    messages,
});

export default rootReducer;