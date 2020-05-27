import axios from "axios";
import { SubmissionError } from 'redux-form';
import history from "../utils/historyUtils";
import { actions as notifActions } from 'redux-notifications';
import { AuthTypes } from "../constants/actionsTypes";
import { AuthUrls } from "../constants/urls";
import store from "../store";
import { getUserToken } from "../utils/authUtils";

const { notifSend } = notifActions;

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
    }).catch(error => {
        const processedError = processServerError(error.response.data);
        throw new SubmissionError(processedError);
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
        .catch((error) => {
            const processedError = processServerError(error.response.data);
            throw new SubmissionError(processedError);
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
            }).catch((error) => {
                console.log(error);
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
            .then((response) => {
                dispatch(notifSend({
                    message: "Votre mot de passe a bien été modifié",
                    kind: "info",
                    dismissAfter: 5000
                }));
                history.push("/profile");
            })
            .catch((error) => {
                const processedError = processServerError(error.response.data);
                throw new SubmissionError(processedError);
            });
    }
}

export function resetPassword(formValues, dispatch, props) {
    const resetPasswordUrl = AuthUrls.RESET_PASSWORD;

    return axios.post(resetPasswordUrl, formValues)
        .then(response => {
            history.push("/reset_password_done");
        }).catch((error) => {
            const processedError = processServerError(error.response.data);
            throw new SubmissionError(processedError);
        });
}

export function confirmPasswordChange(formValues, dispatch, props) {
    const { uid, token } = props.match.params;
    const resetPasswordConfirmUrl = AuthUrls.RESET_PASSWORD_CONFIRM;
    const data = Object.assign(formValues, { uid, token });

    return axios.post(resetPasswordConfirmUrl, data)
        .then(response => {
            dispatch(notifSend({
                message: "Votre mot de passe a bien été modifié",
                kind: "info",
                dismissAfter: 5000
            }));
            history.push("/login");
        }).catch((error) => {
            const processedError = processServerError(error.response.data);
            throw new SubmissionError(processedError);
        });
}

export function activateUserAccount(formValues, dispatch, props) {
    const { key } = props.match.params;
    const activateUserUrl = AuthUrls.USER_ACTIVATION;
    const data = Object.assign(formValues, { key });

    return axios.post(activateUserUrl, data)
        .then(response => {
            dispatch(notifSend({
                message: "Votre compte a bien été activé",
                kind: "info",
                dismissAfter: 5000
            }));
            history.push("/login");
        }).catch((error) => {
            const processedError = processServerError(error.response.data);
            throw new SubmissionError(processedError);
        });
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
            dispatch(notifSend({
                message: "Votre profil a bien été mis à jour",
                kind: "info",
                dismissAfter: 5000
            }));
            history.push("/profile");
        }).catch((error) => {
            const processedError = processServerError(error.response.data);
            throw new SubmissionError(processedError);
        });
    }
}

function processServerError(error) {
    return Object.keys(error).reduce(function (newDict, key) {
        if (key === "non_field_errors") {
            newDict["_error"].push(error[key]);
        } else if (key === "token") {
            newDict["_error"].push("Le lien n'est pas plus valide, merci de soumettre une nouvelle demande");
        } else {
            newDict[key] = error[key];
        }
        return newDict
    }, { "_error": [] });
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