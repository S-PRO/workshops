import { take, call, cps, spawn, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';


const fn = () => 'FN RESULT';
const promise = () => new Promise(
  (resolve, reject) => setTimeout(() => resolve('PROMISE RESULT'), 1000)
);
const generator = function* () {
  yield 'NOTHING';
  yield delay(1000);
  return 'GENERATOR RESULT';
};
const nodeStyle = (cb) => setTimeout(() => cb(null, 'NODE STYLE RESULT'), 1000);

function* callSaga() {
  while (true) {
    let callResult;
    const { type }  = yield take(({ type }) => /^CALL_(.*)/.test(type));
    switch (type) {
      case 'CALL_FN':
        callResult = yield call(fn);
        break;
      case 'CALL_PROMISE':
        callResult = yield call(promise);
        break;
      case 'CALL_GENERATOR':
        callResult = yield call(generator);
        break;
      case 'CALL_NODE_STYLE':
        callResult = yield cps(nodeStyle);
        break;
    }
    console.log(callResult);
  }
}


export default function* (){
  yield all([
    spawn(callSaga),
  ]);
}