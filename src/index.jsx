import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './container/app.jsx';
import todoReducer from './reducer/todo';

let store = createStore(todoReducer);

ReactDOM.render(
    <Provider store={store}>
    < App/>
</Provider>, document.getElementById('main'));
