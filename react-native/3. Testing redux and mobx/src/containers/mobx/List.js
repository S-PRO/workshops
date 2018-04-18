/*
* @Author: valentinegalkin
* @Date:   2018-04-14 15:23:17
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 20:33:28
* @flow
*/

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { inject, observer } from 'mobx-react';

export class List extends Component {

  state = {
    counter: 0,
  };

  _onPress = () => {
    this.props.store.addTodo({
      id: this.state.counter
    });

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      };
    });
  }

  _removeTodo = (id) => {
    this.props.store.removeTodo(id);
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        {
          this.props.store.list.map(item => {
            return (
              <Text
                key={item.id}
              >
                {item.id}
              </Text>
            );
          })
        }
        <TouchableOpacity
          onPress={this._onPress}
        >
          <Text
            style={styles.title}
          >
            AddItem
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 28,
  }
});

export default inject((allStores) => ({
  store: allStores.list,
}))(observer(List));
