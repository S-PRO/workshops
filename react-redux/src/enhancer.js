import moment from 'moment';

import { ARTICLE_CREATE } from './types/article';
import { COMMENT_CREATE } from './types/comment';


export const populateTimestamp = () => createStore => (reducer, state, enhancers) => {
  const store = createStore(reducer, state, enhancers);
  const dispatch = action => {
    let actionToDispatch = action;
    if ([ARTICLE_CREATE, COMMENT_CREATE].includes(action.type)) {
      actionToDispatch = {
        ...action,
        payload: {
          ...action.payload,
          timestamp: moment(),
        }
      };
    }
    store.dispatch(actionToDispatch);
    return actionToDispatch;
  };
  return Object.assign({}, store, { dispatch })
};