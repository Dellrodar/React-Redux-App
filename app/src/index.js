import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import {jokeReducer} from './reducers/JokeReducer';
import * as serviceWorker from './serviceWorker';

const logger = ({ getState }) => next => action => {
  next(action);
};

let store = createStore(jokeReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
   <Provider store={store}>
    <App />,
   </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
