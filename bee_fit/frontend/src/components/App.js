import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Profil from './infos/Profil';
import Alerts from './layout/Alerts'
import { Provider } from 'react-redux';
import store from '../store';
import { Provider as AlertProvider } from 'react-alert';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AlertTemplate from 'react-alert-template-basic';
import PrivateRoute from './common/PrivateRoute'; // added
import Home from "./layout/Home";
import Login from "./accounts/login";
import Register from "./accounts/register";


const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <Route exact path="/" component = {Home} />
                  <Route exact path="/register" component = {Register} />
                  <Route exact path="/login" component = {Login} />
                  </Switch>  
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
}
}

ReactDOM.render(<App />, document.getElementById("app"));
