/*
* @Author: valentinegalkin
* @Date:   2018-04-13 22:28:33
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 21:08:14
* @flow
*/

'use strict';

import types from './actionTypes';

const initialState = {
  list: []
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.addTodo:
      return {
        ...state,
        list: [
          ...state.list,
          action.item,
        ],
      };

    case types.removeTodo:
      let index = null;
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].id === action.id) {
          index = i;
        }
      }

      const modifiedList = index !== null ? [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1),
      ] : [...state.list];
      return {
        ...state,
        list: modifiedList,
      };

    case types.dropList:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
}
