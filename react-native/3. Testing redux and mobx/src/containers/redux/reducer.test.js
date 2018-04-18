/*
* @Author: valentinegalkin
* @Date:   2018-04-14 15:03:46
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 21:09:49
* @flow
*/

'use strict';

import reducer from './reducer';
import types from './actionTypes';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      list: []
    });
  });
  it('should handle types.addTodo', () => {
    expect(
      reducer(undefined, {
        type: types.addTodo,
        item: {
          id: 1,
        },
      })
    ).toEqual({
      list: [
        {
          id: 1,
        }
      ]
    });
  });

  it('should handle types.droplist', () => {
    expect(
      reducer(undefined, {
        type: types.dropList
      })
    ).toEqual({
      list: []
    });
  });

  it('should handle types.addTodo and types.removeTodo', () => {

    // adding item
    expect(
      reducer(undefined, {
        type: types.addTodo,
        item: {
          id: 1,
        },
      })
    ).toEqual({
      list: [
        {
          id: 1,
        }
      ]
    });

    // removing existing item
    expect(
      reducer({
        list: [{
          id: 1
        }]
      }, {
        type: types.removeTodo,
        id: 1,
      })
    ).toEqual({
      list: []
    });

    // removing not existing item
    expect(
      reducer({
        list: [{
          id: 1
        }]
      }, {
        type: types.removeTodo,
        id: 2,
      })
    ).toEqual({
      list: [{
        id: 1
      }]
    });
  });

  it('should handle not supported type', () => {
    expect(
      reducer(undefined, {
        type: types.test,
        item: {
          id: 1,
        },
      })
    ).toEqual({
      list: []
    });
  });
});
