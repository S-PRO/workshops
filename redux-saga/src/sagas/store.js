import { all, take, select, put, spawn } from 'redux-saga/effects';


function* selectFromStore() {
  while (true) {
    yield take('SELECT_FROM_STORE');
    const store = yield select();
    console.log(store);
  }
}


function* putToStore() {
  while (true) {
    yield take('PUT_TO_STORE');
    yield put({ type: 'ADD_FOO', payload: 'foo' });
  }
}


export default function* () {
  yield all([
    spawn(selectFromStore),
    spawn(putToStore),
  ]);
}