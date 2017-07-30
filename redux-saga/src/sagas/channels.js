import { all, spawn, call, take, put, race, cancel } from 'redux-saga/effects';
import { channel } from 'redux-saga';


function* producerSaga() {
  while (true) {
    yield take('START_CONSUMER');
    const chan = yield call(channel);
    const consumer = yield spawn(consumerSaga, chan);
    console.log('CONSUMER STARTED');
    yield race({
      _: take('STOP_CONSUMER'),
      __: call(function* () {
        while (true) {
          yield take('SEND_MESSAGE_TO_CONSUMER');
          yield put(chan, 'MESSAGE_FROM_CONSUMER');
        }
      })
    });
    yield cancel(consumer);
    console.log('CONSUMER CLOSED');
  }
}


function* consumerSaga(chan) {
  while (true) {
    const message = yield take(chan);
    console.log('CONSUMER RECEIVED MESSAGE FROM PRODUCER', message);
  }
}

export default function* () {
  yield all([
    spawn(producerSaga),
  ]);
}