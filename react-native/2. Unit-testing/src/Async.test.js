/*
* @Author: valentinegalkin
* @Date:   2018-04-10 11:18:46
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-11 09:43:05
* @flow
*/

import React from 'react';
import { shallow } from 'enzyme';
import Async from './Async';

describe('success interaction', () =>{
  let wrapper;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
          resolve({
            status: 'Ok',
            json: () => {
              return {
                status: 'Ok',
              };
            }
          });
      });
    });
    wrapper = shallow(<Async />);
  });

  it('should call _onPress from TouchableOpacity', (done) => {
    const spy = jest.spyOn(wrapper.instance(), '_hideLoader');
    wrapper.find('TouchableOpacity').prop('onPress')();

    setTimeout(() => {
      expect(wrapper.state('hasHacked')).toBe(true);
      expect(spy).toHaveBeenCalled();
      done();
    }, 1);
  });
});

describe('failure interaction', () =>{
  let wrapper;

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
          reject({
            status: 'Ok',
            json: () => {
              return {
                status: 'Ok',
              };
            }
          });
      });
    });
    wrapper = shallow(<Async />);
  });

  it('should call _onPress from TouchableOpacity', (done) => {
    const spy = jest.spyOn(wrapper.instance(), '_hideLoader');
    wrapper.find('TouchableOpacity').prop('onPress')();

    setTimeout(() => {
      expect(wrapper.state('hasHacked')).toBe(false);
      expect(wrapper.state('wasFcked')).toBe(true);
      expect(spy).toHaveBeenCalled();
      done();
    }, 1);
  });
});

