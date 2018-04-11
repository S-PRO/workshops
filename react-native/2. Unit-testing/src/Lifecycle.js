/*
* @Author: valentinegalkin
* @Date:   2018-04-09 19:36:50
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-11 09:43:39
* @flow
*/

'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      counter: 0
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps() {}

  shouldComponentUpdate() { return true; }

  componentWillUpdate() {}

  componentDidUpdate() {}

  render() {
    const { hideTitle } = this.props;
    const { counter } = this.state;
    return (
      <View
        style={styles.container}
      >
        <TouchableOpacity
          onPress={this._onPress}
        >
          <Text
            style={styles.btnTitle}
          >
            Increase counter
          </Text>
        </TouchableOpacity>

        {!hideTitle &&
          <Text
            style={styles.counterTitle}
          >
            Counter is:
          </Text>
        }
        {counter > 0 &&
          <Text
            style={styles.counterValue}
          >
            {counter}
          </Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center',
  },
  btnTitle: {
    fontSize: 24,
  },
  counterTitle: {
    fontSize: 30,
  },
  counterValue: {
    fontSize: 26,
  }
});

export default Lifecycle;
