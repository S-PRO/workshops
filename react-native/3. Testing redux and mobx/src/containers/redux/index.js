/*
* @Author: valentinegalkin
* @Date:   2018-04-14 20:14:01
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 21:11:57
* @flow
*/

'use strict';
import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combined } from './store';
import List from './List';

const store = createStore(combined);

class Root extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <List />
      </Provider>
    );
  }
}

export default Root;
