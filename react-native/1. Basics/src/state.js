/*
* @Author: valentinegalkin
* @Date:   2018-03-21 21:22:55
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-03-21 23:16:14
* @flow
*/

'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';

class Item extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.block}>
        <Text>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    )
  }
}

class State extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: [
        {
          label: 'first'
        },
        {
          label: 'second'
        },
        {
          label: 'third'
        },
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.data.map(item => {
            return <Item {...item} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  block: {
    height: 40,
    backgroundColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  }
});


export default State;