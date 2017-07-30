import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';


const reducer = (state = [], { type, payload }) => {
  if (type === 'ADD_FOO') {
    return [...state, payload];
  }
  return state;
};

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;

