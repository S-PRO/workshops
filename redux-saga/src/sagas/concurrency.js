import { race, all, spawn, take, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';


const endlessSync = () => {
  return setInterval(() => console.log('PERFORMING SYNC'), 1000);
};

const endlessSyncAlter = function* (){
  while (true) {
    yield delay(1000);
    console.log('PERFORMING SYNC');
  }
};


function* simpleSync() {
  while (true) {
    yield take('START_SIMPLE_SYNC');
    console.log('STARTING SIMPLE SYNC');
    const sync = yield call(endlessSync);
    yield take('CANCEL_SYNC');
    yield call(clearInterval, sync);
  }
}

function* syncWithAll() {
  while (true) {
    yield take('START_SYNC_WITH_ALL');
    console.log('STARTING SYNC WITH ALL');
    const [sync, _] = yield all([
      call(endlessSync),
      take('CANCEL_SYNC'),
    ]);
    yield call(clearInterval, sync);
  }
}

function* syncWithRace() {
  while (true) {
    yield take('START_SYNC_WITH_RACE');
    console.log('STARTING SYNC WITH RACE');
    yield race({
      _: call(endlessSyncAlter),
      __: take('CANCEL_SYNC'),
    });
  }
}


export default function* (){
  yield all([
    spawn(simpleSync),
    spawn(syncWithAll),
    spawn(syncWithRace),
  ]);
}