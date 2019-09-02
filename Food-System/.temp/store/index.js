import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import combineReducers from '../reducers/index';

const middlewares = [thunkMiddleware, createLogger()];

export default function configStore() {
  const store = createStore(combineReducers, applyMiddleware(...middlewares));
  return store;
}