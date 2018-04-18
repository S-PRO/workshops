/*
* @Author: valentinegalkin
* @Date:   2018-04-14 15:28:15
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 20:15:09
* @flow
*/

'use strict';

import React, { Component } from 'react';
import { Provider } from 'mobx-react/native';
import List from './List';
import ListStore from './store';

class Root extends Component {
  render() {
    return (
      <Provider
        list={ListStore}
      >
        <List />
      </Provider>
    );
  }
}

export default Root;
