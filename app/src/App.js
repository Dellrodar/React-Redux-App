import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Cards} from './components/Cards/Cards';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import {jokeReducer} from './reducers/JokeReducer';

const logger = ({ getState }) => next => action => {
  next(action);
};

let store = createStore(jokeReducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

store = createStore()

export default App;
