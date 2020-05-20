import { combineReducers } from 'redux';
import infos from './infos.js';
import errors from './errors';

export default combineReducers({
    infos,
    errors

});