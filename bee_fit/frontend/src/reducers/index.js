import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";

import infos from './infos.js';
import errors from './errors';
import messages from './messages'
import auth from './auth'; 

const rootReducer = combineReducers({
    form: formReducer,
    auth,
    infos, 
    errors,
    messages,
});

export default rootReducer;