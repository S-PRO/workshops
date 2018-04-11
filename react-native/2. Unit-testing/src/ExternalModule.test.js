/*
* @Author: valentinegalkin
* @Date:   2018-04-10 11:18:46
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-11 09:16:05
* @flow
*/

import React from 'react';
import { shallow } from 'enzyme';
import ExternalModule from './ExternalModule';

describe('rendering', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExternalModule />);
  });

  it('should render View element', () => {
    expect(wrapper.find('View')).toHaveLength(1);
  });

  it('should render RNSlider element with text', () => {
    expect(wrapper.find('RNSlider')).toHaveLength(1);
  });
});
