import React, { Component } from 'react';
import reactDom from 'react-dom';
import Header from './layout/Header';
import { Provider } from 'react-redux';
import store from '../store';
import LoginForm from './auth/LoginForm'; // added
import PrivateRoute from './common/PrivateRoute'; // added

import { loadUser } from '../actions/auth'; // added

class App extends Component {
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