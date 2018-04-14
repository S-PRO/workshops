/*
* @Author: Valentin
* @Date:   2018-04-13 21:22:28
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 15:41:24
* @flow
*/

'use strict';

import { ListStore } from './store';

describe('testing HydratedStore', () => {
  let store = null;

  beforeEach(() => {
    store = require('./store').default;
  });

  it('should call setHydrated', (done) => {
    setTimeout(() => {
      expect(store.isHydrated).toBe(true);
      done();
    }, 100);
  });
});

describe('testing ListStore', () => {
  let store = null;

  beforeEach(() => {
    global.window = {
      localStorage: {
        clear: jest.fn(),
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
      }
    };
    store = new ListStore();
  });

  it('should call setHydrated', () => {
    expect(store.isHydrated).toBe(false);
    store.setHydrated(true);
    expect(store.isHydrated).toBe(true);
  });

  it('should call addTodo', () => {
    expect(store.listLength).toBe(0);
    store.addTodo({id: 1});
    expect(store.listLength).toBe(1);
  });

  it('should call removeTodo', () => {
    // setting first item to list
    expect(store.listLength).toBe(0);
    store.addTodo({id: 1});
    expect(store.listLength).toBe(1);
    // trying to remove unexisting item
    store.removeTodo(2);
    expect(store.listLength).toBe(1);
    // removing existing item
    store.removeTodo(1);
    expect(store.listLength).toBe(0);
  });

  it('should call userName', () => {
    expect(store.userName).toBe('');
    store.setUser({name: 'Bobby'});
    expect(store.userName).toBe('Bobby');
  });

  it('should call clearStore', () => {
    store.setHydrated(true);
    expect(store.isHydrated).toBe(true);
    store.clearStore();
    expect(store.isHydrated).toBe(false);
  });
});
