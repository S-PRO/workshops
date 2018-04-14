/*
* @Author: valentinegalkin
* @Date:   2018-04-13 22:28:44
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 21:08:14
* @flow
*/

'use strict';

import types from './actionTypes';

export function addTodo(item) {
  return {
    type: types.addTodo,
    item
  };
}

export function removeTodo(id) {
  return {
    type: types.removeTodo,
    id
  };
}

export function dropList() {
  return {
    type: types.dropList
  };
}
