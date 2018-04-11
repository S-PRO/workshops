/*
* @Author: valentinegalkin
* @Date:   2018-03-21 21:21:46
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-03-22 08:58:33
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

class Button extends Component {
  constructor(props) {
    super(props);
    console.log(11, 'constructor');
  }

  componentWillMount() {
    console.log(22, 'componentWillMount');
  }

  componentDidMount() {
    console.log(44, 'componentDidMount');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log(55, 'componentWillReceiveProps');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(66, 'shouldComponentUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('nextContext', nextContext);
    return true;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log(77, 'componentWillUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('nextContext', nextContext);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(88, 'componentDidUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  componentWillUnmount() {
    console.log(99, 'componentWillUnmount');
  }

  componentDidCatch(errorString, errorInfo) {
    console.log(1010, 'componentDidCatch');
    console.log('errorString', errorString);
    console.log('errorInfo', errorInfo);
  }

  render() {
    console.log(33, 'render');
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onPress}
      >
        <Text
          style={styles.buttonText}
        >
          {`${this.props.value}+1`}
        </Text>
      </TouchableOpacity>
    );
  }
}

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log(1, 'constructor');
  }

  componentWillMount() {
    console.log(2, 'componentWillMount');
  }

  componentDidMount() {
    console.log(4, 'componentDidMount');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log(5, 'componentWillReceiveProps');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(6, 'shouldComponentUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('nextContext', nextContext);
    return true;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log(7, 'componentWillUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('nextContext', nextContext);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(8, 'componentDidUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

  componentWillUnmount() {
    console.log(9, 'componentWillUnmount');
  }

  componentDidCatch(errorString, errorInfo) {
    console.log(10, 'componentDidCatch');
    console.log('errorString', errorString);
    console.log('errorInfo', errorInfo);
  }

  _increaseCounter = () => {
    this.setState((state, props) => {
      return {
        counter: state.counter + 1
      };
    });
  }

  render() {
    console.log(3, 'render');
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{this.state.counter}</Text>

        <Button
          onPress={this._increaseCounter}
          value={this.state.counter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 50,
  },
  button: {
    padding: 20,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 30
  }
});


export default Lifecycle;