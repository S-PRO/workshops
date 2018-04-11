/*
* @Author: valentinegalkin
* @Date:   2018-04-10 11:18:46
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-11 09:43:20
* @flow
*/

import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('rendering', () => {
  let wrapper,
      props = {
        hideTitle: false,
      };

  beforeEach(() => {
    wrapper = shallow(<Counter {...props}/>);
  });

  it('should render View element', () => {
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('should render Text element with text', () => {
    expect(wrapper.find('Text')).toHaveLength(2);
    expect(wrapper.find('Text').at(0).contains('Increase counter')).toBe(true);
    expect(wrapper.find('Text').at(1).contains('Counter is:')).toBe(true);
  });
});

describe('interaction', () =>{
  let wrapper,
      props = {
        hideTitle: false,
      };

  beforeEach(() => {
    wrapper = shallow(<Counter {...props}/>);
  });

  it('should render Text element without title', () => {
    expect(wrapper.find('Text')).toHaveLength(2);
    wrapper.setProps({hideTitle: true});
    expect(wrapper.find('Text')).toHaveLength(1);
    wrapper.setState({counter: 1});
    expect(wrapper.find('Text')).toHaveLength(2);
  });

  it('should call _onPress from TouchableOpacity', () => {
    expect(wrapper.state('counter')).toEqual(0);
    wrapper.find('TouchableOpacity').prop('onPress')();
    expect(wrapper.state('counter')).toEqual(1);
    wrapper.find('TouchableOpacity').prop('onPress')();
    expect(wrapper.state('counter')).toEqual(2);
  });

  it('should call _onPress from container', () => {
    expect(wrapper.state('counter')).toEqual(0);
    wrapper.instance()._onPress();
    expect(wrapper.state('counter')).toEqual(1);
  });
});

