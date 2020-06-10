const ROOT_URL = "http://localhost:8000/";

export const AuthUrls = {
    LOGIN: `${ROOT_URL}rest-auth/login/`,
    SIGNUP: `${ROOT_URL}rest-auth/registration/`,
    CHANGE_PASSWORD: `${ROOT_URL}rest-auth/password/change/`,
    RESET_PASSWORD: `${ROOT_URL}rest-auth/password/reset/`,
    RESET_PASSWORD_CONFIRM: `${ROOT_URL}rest-auth/password/reset/confirm/`,
    USER_ACTIVATION: `${ROOT_URL}rest-auth/registration/verify-email/`,
    USER_PROFILE: `${ROOT_URL}rest-auth/user/`,
    UPDATE_HEALTH_DATA: `${ROOT_URL}api/profile`,
    GET_HEALTH_DATA: `${ROOT_URL}api/profile`
};

export const CalUrls = {
    GET_BREAKFAST: `${ROOT_URL}api/breakfast`,
    GET_LUNCH: `${ROOT_URL}api/lunch`,
    GET_DINNER: `${ROOT_URL}api/dinner`,
    ADD_MEAL: `${ROOT_URL}api/meal/`,
    EDIT_MEAL: `${ROOT_URL}api/meal/`,
    DELETE_MEAL: `${ROOT_URL}api/meal/`, 
    GET_WEIGHT: `${ROOT_URL}api/user/weight`, 
    UPDATE_WEIGHT: `${ROOT_URL}api/user/weight`, 
    GET_CALORIES: `${ROOT_URL}api/total-calories`, 
}