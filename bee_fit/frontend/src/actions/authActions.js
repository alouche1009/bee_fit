import axios from "axios";
import history from "../utils/historyUtils";
import { SubmissionError } from 'redux-form';
import { AuthTypes } from "../constants/actionsTypes";
import { AuthUrls } from "../constants/urls";
import store from "../store";
import { getUserToken } from "../utils/authUtils";
import { createMessage, returnErrors } from './messages';

export function authLogin(token) {
    return {
        type: AuthTypes.LOGIN,
        payload: token
    };
}

export function loginUser(formValues, dispatch, props) {
    const loginUrl = AuthUrls.LOGIN;

    return axios.post(loginUrl, formValues).then((response) => {
        const token = response.data.key;
        dispatch(authLogin(token));
        localStorage.setItem("token", token);
        history.push("/");
    }) .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
      });
}

export function logoutUser() {
    localStorage.removeItem("token");
    return {
        type: AuthTypes.LOGOUT
    };
}

export function signupUser(formValues, dispatch, props) {
    const signupUrl = AuthUrls.SIGNUP;

    return axios.post(signupUrl, formValues)
        .then((response) => {
            history.push("/signup_done");
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

function setUserProfile(payload) {
    return {
        type: AuthTypes.USER_PROFILE,
        payload: payload
    };
}

export function getUserProfile() {
    return function (dispatch) {
        const token = getUserToken(store.getState());
        if (token) {
            axios.get(AuthUrls.USER_PROFILE, {
                headers: {
                    authorization: 'Token ' + token
                }
            }).then(response => {
                dispatch(setUserProfile(response.data))
            }).catch((err) => {
                dispatch(returnErrors(err.response.data, err.response.status));
            });
        }
    };
}

export function changePassword(formValues, dispatch, props) {
    const changePasswordUrl = AuthUrls.CHANGE_PASSWORD;
    const token = getUserToken(store.getState());

    if (token) {
        return axios.post(changePasswordUrl, formValues, {
            headers: {
                authorization: 'Token ' + token
            }
        })
            .then((res) => {
                dispatch(createMessage({ changePassword: 'Votre mot de passe a bien été modifié' }));
                history.push("/profile");
            })
            .catch((err) => {
                dispatch(returnErrors(err.response.data, err.response.status));
            });
    }
}

export function resetPassword(formValues, dispatch, props) {
    const resetPasswordUrl = AuthUrls.RESET_PASSWORD;

    return axios.post(resetPasswordUrl, formValues)
        .then(res => {
            dispatch(createMessage({ resetPassword: 'Un email vous a été envoyé pour modifier votre mot de passe' }));
            history.push("/reset_password_done");
        }).catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

export function confirmPasswordChange(formValues, dispatch, props) {
    const { uid, token } = props.match.params;
    const resetPasswordConfirmUrl = AuthUrls.RESET_PASSWORD_CONFIRM;
    const data = Object.assign(formValues, { uid, token });

    return axios.post(resetPasswordConfirmUrl, data)
        .then(res => {
            dispatch(createMessage({ confirmPasswordChange: 'Votre mot de passe a bien été modifié' }));
            history.push("/login");
        }).catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

export function activateUserAccount(formValues, dispatch, props) {

    const { key } = props.match.params;
    const activateUserUrl = AuthUrls.USER_ACTIVATION;
    const data = Object.assign(formValues, { key });
    return dispatch => {


    return axios.post(activateUserUrl, data)
        .then(res => {
            dispatch(createMessage({ activateUserAccount: 'Votre compte est bien activé! Veuillez vous connecter' }));
            history.push("/");
        }).catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}
}

export function updateUserProfile(formValues, dispatch, props) {
    const token = getUserToken(store.getState());
    return dispatch => {
    return axios.patch(AuthUrls.USER_PROFILE, formValues, {
        headers: {
            authorization: 'Token ' + token
        }
    })
        .then(response => {
            dispatch(createMessage({ updateUserProfile: 'Vos informations ont bien été enregistrées' }));
            history.push("/profile");
        }).catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
    }
}

function processServerError(err) {
        return Object.keys(err).reduce(function (newDict, key) {
        if (key === "non_field_errs") {
            newDict["_err"].push(err[key]);
        } else if (key === "token") {
            newDict["_err"].push("Le lien n'est pas plus valide, merci de soumettre une nouvelle demande");
        } else {
            newDict[key] = err[key];
        }
        return newDict
    }, { "_err": [] });
}

export const tokenConfig = () => {
    const token = getUserToken(store.getState());
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
};