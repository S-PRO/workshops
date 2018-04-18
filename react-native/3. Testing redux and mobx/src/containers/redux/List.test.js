/*
* @Author: valentinegalkin
* @Date:   2018-04-14 15:23:42
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 22:19:23
* @flow
*/

'use strict';


import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { combined } from './store';
import ConnectedList from './List';

describe('rendering', () => {
  let wrapper;

  beforeEach(() => {
    // we configure store for each time for clearing reducers;
    const store = createStore(combined);
    // instead of wrapping component in Provider - we just pass as a context combined store
    wrapper = shallow(<ConnectedList />, { context: {store} });
  });

  it('should render all required items', () => {
    // wrapper is not a clear List component - it is wrapped in HOC component (Connect)
    // so when we need to check all items in List component - we need to call .dive() method
    // it moves us one level deeper in components tree
    expect(wrapper.dive().find('View')).toHaveLength(1);
    expect(wrapper.dive().find('TouchableOpacity')).toHaveLength(1);
    expect(wrapper.dive().find('Text')).toHaveLength(1);
  });
});

describe('interaction', () => {
  let wrapper;

  beforeEach(() => {
    const store = createStore(combined);
    wrapper = shallow(<ConnectedList />, { context: {store} });
  });

  it('should call _onPress', () => {
    expect(wrapper.dive().find('Text')).toHaveLength(1);
    wrapper.dive().find('TouchableOpacity').prop('onPress')();
    wrapper.update();
    expect(wrapper.dive().find('Text')).toHaveLength(2);
  });

  it('should call _removeTodo', () => {
    expect(wrapper.dive().find('Text')).toHaveLength(1);
    wrapper.dive().find('TouchableOpacity').prop('onPress')();
    // we call wrapper.update() in order to update props from mobx
    wrapper.update();
    expect(wrapper.dive().find('Text')).toHaveLength(2);
    // wrapper is not a clear List component - it is wrapped in HOC component (Connect)
    // so when we need to get instance of List component - we call .dive method
    // it moves us one level deeper in components tree
    // and here we can get all List component methods
    wrapper.dive().instance()._removeTodo(1);
    wrapper.update();
    expect(wrapper.dive().find('Text')).toHaveLength(2);
    wrapper.dive().instance()._removeTodo(0);
    wrapper.update();
    expect(wrapper.dive().find('Text')).toHaveLength(1);
  });
});
