import { all, spawn } from 'redux-saga/effects';

import store from './store';
import call from './call';
import concurrency from './concurrency';
import channels from './channels';

export default function* () {
  yield all([
    spawn(store),
    spawn(call),
    spawn(concurrency),
    spawn(channels),
  ])
}