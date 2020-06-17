import { MessTypes } from "../constants/actionsTypes";

export const createMessage = (message) => {
  return {
    type: MessTypes.CREATE_MESSAGE,
    payload: message,
  };
};

export const returnErrors = (message, status) => {
  return {
    type: MessTypes.GET_ERRORS,
    payload: { message, status },
  };
};