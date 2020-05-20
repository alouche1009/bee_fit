import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Profil from './infos/Profil';
import Alerts from './layout/Alerts'
import { Provider } from 'react-redux';
import store from '../store';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import LoginForm from './auth/LoginForm'; // added
import PrivateRoute from './common/PrivateRoute'; // added

const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

import { loadUser } from '../actions/auth'; // added

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header />
            <Alerts />
            <div className="container">
              <Profil />
            </div>
          </Fragment>
          </AlertProvider>
      </Provider>
    );
  }
    render() {
      return (
        <Provider store={store}>
          <Router history={history}>
            <Header />
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} /> // updated
              <Route exact path='/delete/:id' component={TodoDelete} />
              <Route exact path='/edit/:id' component={TodoEdit} />
              <Route exact path='/login' component={LoginForm} /> // added
            </Switch>
          </Router>
        </Provider>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));