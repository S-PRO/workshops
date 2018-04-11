/*
* @Author: valentinegalkin
* @Date:   2018-04-10 11:18:46
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-11 09:20:57
* @flow
*/

import React from 'react';
import { shallow } from 'enzyme';
import Lifecycle from './Lifecycle';

describe('interaction', () =>{
  let wrapper,
      props = {
        hideTitle: false,
      },
      willMount,
      didMount,
      willReceiveProps,
      shouldUpdate,
      willUpdate,
      didUpdate;

  beforeEach(() => {
    willMount = jest.spyOn(Lifecycle.prototype, 'componentWillMount');
    didMount = jest.spyOn(Lifecycle.prototype, 'componentDidMount');
    willReceiveProps = jest.spyOn(Lifecycle.prototype, 'componentWillReceiveProps');
    shouldUpdate = jest.spyOn(Lifecycle.prototype, 'shouldComponentUpdate');
    willUpdate = jest.spyOn(Lifecycle.prototype, 'componentWillUpdate');
    didUpdate = jest.spyOn(Lifecycle.prototype, 'componentDidUpdate');

    wrapper = shallow(<Lifecycle />);
  });

  it('should call componentDidMount', () => {
    expect(willMount).toHaveBeenCalled();
    expect(didMount).toHaveBeenCalled();
  });

  it('should call componentWillReceiveProps', () => {
    wrapper.setProps({hideTitle: true});
    expect(shouldUpdate).toHaveBeenCalled();
    expect(willReceiveProps).toHaveBeenCalled();
    expect(willUpdate).toHaveBeenCalled();
    expect(didUpdate).toHaveBeenCalled();
  });
});

