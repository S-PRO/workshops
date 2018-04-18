/*
* @Author: valentinegalkin
* @Date:   2018-04-13 22:45:58
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 21:09:30
* @flow
*/

'use strict';

import * as actions from './actions';
import types from './actionTypes';

describe('actions', () => {
  it('should call addTodo and return correct action', () => {
    const item = {id: 0};
    const expected = {
      type: types.addTodo,
      item
    };
    expect(actions.addTodo(item)).toEqual(expected);
  });

  it('should call removeTodo and return correct action', () => {
    const id = 0;
    const expected = {
      type: types.removeTodo,
      id
    };
    expect(actions.removeTodo(id)).toEqual(expected);
  });

  it('should call dropList and return correct action', () => {
    const expected = {
      type: types.dropList
    };
    expect(actions.dropList()).toEqual(expected);
  });
});
