/*
* @Author: valentinegalkin
* @Date:   2018-04-10 21:22:43
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-11 09:43:01
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

class Async extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      hasHacked: false,
      wasFcked: false,
    };
  }

  _onPress = () => {
    fetch('https://api.github.com/users/octocat/orgs')
    .then(data => data.json())
    .then(res => {
      this.setState((prevState) => {
        return {
          hasHacked: true,
        };
      });
    })
    .catch(err => {
      this.setState((prevState) => {
        return {
          wasFcked: true,
        };
      });
    })
    .finally(() => {
      this._hideLoader();
    });
  }

  _hideLoader = () => {}

  render() {
    const { hasHacked, wasFcked } = this.state;
    return (
      <View style={styles.container}>
        {!hasHacked && !wasFcked &&
          <TouchableOpacity
            onPress={this._onPress}
          >
            <Text
              style={styles.title}
            >
              HACK GITHUB
            </Text>
          </TouchableOpacity>
        }
        {hasHacked &&
          <Text
            style={styles.title}
          >
            Yaaay! I've hacked github!
          </Text>
        }
        {wasFcked &&
          <Text
            style={styles.title}
          >
            F*cking octopus
          </Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    fontSize: 40,
  }
});


export default Async;