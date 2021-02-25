import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, compose, applyMiddleware} from 'redux';
import allReducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(
    allReducers,
    composedEnhancer,
  );
export default store;