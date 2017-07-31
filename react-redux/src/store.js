import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';
import { createLogger } from 'redux-logger';

import article from './reducers/article';
import comment from './reducers/comment';

import { populateTimestamp } from './enhancer';


export default createStore(
  combineReducers({ article, comment }),
  compose(
    populateTimestamp(),
    applyMiddleware(createLogger({ collapsed: true })),
  )
);