// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Initial State
const initialState = {
  messages: [],
  channels: ['general', 'react', 'tokyo'],
  selectedChannel: 'general',
  // currentUsername: prompt("What's your name?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

// State and reducers
const reducers = combineReducers({
  initialState
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
