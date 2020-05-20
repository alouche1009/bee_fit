import { combineReducers } from 'redux';
import users from './users.js';
import auth from './auth'; // added

export default combineReducers({
    users,
    form: formReducer,
    todos,
    auth // added

});