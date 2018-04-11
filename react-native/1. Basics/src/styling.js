/*
* @Author: valentinegalkin
* @Date:   2018-03-21 21:23:10
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-03-22 09:24:51
* @flow
*/

'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Platform,
  TextInput,
  Text,
} from 'react-native';

const OverflowExample = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.child1} />
      <View style={styles.child2} />
    </View>
  );
}

const TextInputExample = (props) => {
  return (
    <View style={styles.inputWrapper}>
      {props.value.length === 0 &&
        <Text style={styles.placeholder}>
          Placeholder
        </Text>
      }
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

class Styling extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      input: ''
    };
  }

  _inputChange = (text) => {
    this.setState((state, props) => {
      return {
        input: text
      };
    })
  }

  render() {
    const container = Platform.select({ios: styles.iosContainer, android: styles.androidContainer});
    return (
      <View style={[styles.container, container]}>
        <TextInputExample
          value={this.state.input}
          onChangeText={this._inputChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  iosContainer: {
    backgroundColor: 'blue',
  },
  androidContainer: {
    backgroundColor: 'green',
  },
  wrapper: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
  },
  child1: {
    // zIndex: 1,
    width: 30,
    height: 30,
    backgroundColor: 'orange',
  },
  child2: {
    // marginTop: -30,
    // zIndex: 3,
    width: 30,
    height: 30,
    backgroundColor: 'red',
  },
  inputWrapper: {
    // flex
    backgroundColor: 'red',
    // alignItems: 'center',
  },
  input: {
    minHeight: 25,
    // backgroundColor: 'yellow'
    // flex: 1,
  },
  placeholder: {
    position: 'absolute',
    top: 0,
    left: 0,
  }
});


export default Styling;