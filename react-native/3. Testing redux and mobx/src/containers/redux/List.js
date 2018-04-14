/*
* @Author: valentinegalkin
* @Date:   2018-04-14 15:23:17
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-14 22:13:31
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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodo, removeTodo } from './actions';

export class List extends Component {

  state = {
    counter: 0,
  };

  _onPress = () => {
    this.props.actions.addTodo({
      id: this.state.counter
    });

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      };
    });
  }

  _removeTodo = (id) => {
    this.props.actions.removeTodo(id);
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

function mapStateToProps(state) {
  return {
    store: state.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addTodo, removeTodo }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
