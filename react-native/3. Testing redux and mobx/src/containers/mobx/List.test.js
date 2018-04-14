/*
* @Author: valentinegalkin
* @Date:   2018-04-14 15:23:42
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 22:18:38
* @flow
*/

'use strict';


import React from 'react';
import { shallow } from 'enzyme';

import InjectedList, {List} from './List';
import {ListStore} from './store';

describe('rendering InjectedList', () => {
  let wrapper;

  beforeEach(() => {
    const list = new ListStore();
    wrapper = shallow(<InjectedList store={list} />);
  });

  it('should render a View', () => {
    expect(wrapper.find('View')).toHaveLength(0);
  });
});

describe('rendering', () => {
  let wrapper;

  beforeEach(() => {
    const list = new ListStore();
    wrapper = shallow(<List store={list} />);
  });

  it('should render all required items', () => {
    expect(wrapper.find('View')).toHaveLength(1);
    expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});

describe('interaction', () => {
  let wrapper;

  beforeEach(() => {
    const list = new ListStore();
    wrapper = shallow(<List store={list} />);
  });

  it('should call _onPress', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
    wrapper.find('TouchableOpacity').prop('onPress')();
    wrapper.update();
    expect(wrapper.find('Text')).toHaveLength(2);
  });

  it('should call _removeTodo', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
    wrapper.find('TouchableOpacity').prop('onPress')();
    // we call wrapper.update() in order to update props from mobx
    wrapper.update();
    expect(wrapper.find('Text')).toHaveLength(2);
    wrapper.instance()._removeTodo(1);
    wrapper.update();
    expect(wrapper.find('Text')).toHaveLength(2);
    wrapper.instance()._removeTodo(0);
    wrapper.update();
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});
