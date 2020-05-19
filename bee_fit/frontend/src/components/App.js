import React, { Component } from 'react';
import reactDom from 'react-dom';
import Header from './layout/Header';
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));