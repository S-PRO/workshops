/*
* @Author: valentinegalkin
* @Date:   2018-04-10 18:14:19
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-04-11 09:19:27
* @flow
*/

'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import RNSlider from "react-native-slider";

class ExternalModule extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNSlider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
});


export default ExternalModule;