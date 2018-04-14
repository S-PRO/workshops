/*
* @Author: Valentin
* @Date:   2018-01-30 18:12:01
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 16:07:00
* @flow
*/

'use strict';

import { AsyncStorage } from 'react-native';
import { observable, action, computed } from 'mobx';
import { create, persist } from 'mobx-persist';

export class ListStore {
  @observable isHydrated = false;
  @observable list = [];
  @persist('object') @observable user = null;

  @action setUser(data) {
    this.user = {
      ...data
    };
  }

  @action setHydrated(value) {
    this.isHydrated = value;
  }

  @action addTodo(item) {
    this.list.push(item);
  }

  @action removeTodo(id) {
    let index = null;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        index = i;
      }
    }
    if (index !== null) {
      this.list = [
        ...this.list.slice(0, index),
        ...this.list.slice(index + 1),
      ];
    }
  }

  @action clearStore() {
    this.isHydrated = false;
    this.list = [];
    this.user = null;
  }

  @computed get listLength() {
    return this.list.length;
  }

  @computed get userName () {
    let name = '';
    if ((this.user) && this.user.name) {
      name = `${this.user.name}`;
    }

    return name;
  }
}

const hydrate = create({
  storage: AsyncStorage
});

const listStore = new ListStore();

export default listStore;
hydrate('list', listStore)
  .then(() => {
    listStore.setHydrated(true);
  });
