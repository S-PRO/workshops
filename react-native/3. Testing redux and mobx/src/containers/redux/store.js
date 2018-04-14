/*
* @Author: valentinegalkin
* @Date:   2018-04-14 20:18:39
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 21:12:06
* @flow
*/

'use strict';

import {
  combineReducers
} from 'redux';
import reducer from './reducer';

export const combined = combineReducers({
  list: reducer,
});
