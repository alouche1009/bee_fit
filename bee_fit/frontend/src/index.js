import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import history from "./utils/historyUtils";
import { authLogin } from "./actions/authActions";
import App from "./components/App";
import { Provider as AlertProvider } from 'react-alert';
import Alerts from '../src/components/layout/Alerts';
import AlertTemplate from 'react-alert-template-basic';

const alertOptions = {
    timeout: 5000,
    position: "top center",
};


const token = localStorage.getItem("token");

if (token) {
    store.dispatch(authLogin(token));
}

ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Router history={history}>
                <Alerts />
                <App />
            </Router>
        </AlertProvider>
    </Provider>
    , document.getElementById("app"));