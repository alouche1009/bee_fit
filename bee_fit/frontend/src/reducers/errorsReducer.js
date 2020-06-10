import { MessTypes } from '../constants/actionsTypes';

const initialState = {
  message: {},
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MessTypes.GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
      };
    default:
      return state;
  }
}