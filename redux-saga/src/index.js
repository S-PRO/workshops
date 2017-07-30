import React from 'react';
import { render } from 'react-dom';

import store from './store';


class App extends React.Component {

  render() {
    return (
      <div>
        <h3>
          Store
        </h3>
        <button onClick={() => store.dispatch({ type: 'PUT_TO_STORE' })}>
          Put to store
        </button>
        <button onClick={() => store.dispatch({ type: 'SELECT_FROM_STORE' })}>
          Select from store
        </button>
        <h3>
          Call
        </h3>
        <button onClick={() => store.dispatch({ type: 'CALL_FN' })}>
          Call fn
        </button>
        <button onClick={() => store.dispatch({ type: 'CALL_PROMISE' })}>
          Call promise
        </button>
        <button onClick={() => store.dispatch({ type: 'CALL_GENERATOR' })}>
          Call generator
        </button>
        <button onClick={() => store.dispatch({ type: 'CALL_NODE_STYLE' })}>
          Call node style
        </button>
        <h3>Concurrency</h3>
        <button onClick={() => store.dispatch({ type: 'START_SIMPLE_SYNC' })}>
          Start simple sync
        </button>
        <button onClick={() => store.dispatch({ type: 'START_SYNC_WITH_ALL' })}>
          Start sync with all
        </button>
        <button onClick={() => store.dispatch({ type: 'START_SYNC_WITH_RACE' })}>
          Start sync with race
        </button>
        <button onClick={() => store.dispatch({ type: 'CANCEL_SYNC' })}>
          Cancel sync
        </button>
        <h3>Channels</h3>
        <button onClick={() => store.dispatch({ type: 'START_CONSUMER' })}>
          Start consumer saga
        </button>
        <button onClick={() => store.dispatch({ type: 'STOP_CONSUMER' })}>
          Stop consumer saga
        </button>
        <button onClick={() => store.dispatch({ type: 'SEND_MESSAGE_TO_CONSUMER' })}>
          Send message to consumer
        </button>
      </div>
    )
  }
}


render(<App />, document.getElementById('root'));