import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import exampleReducer from './reducer';


const rootReducer = combineReducers({
    exampleReducer
});


const store = createStore(
    rootReducer,

    applyMiddleware(
        thunk,
        // createLogger()
    )
);

export default store;
