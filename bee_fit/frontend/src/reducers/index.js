import { combineReducers } from 'redux';
import infos from './infos.js';
import errors from './errors';
import messages from './messages'

export default combineReducers({
    infos,
    errors,
    messages

});