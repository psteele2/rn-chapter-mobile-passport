/**
 * Feature Screen
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View
} from 'react-native';

export default class FeatureScreen extends Component {

  //dummy method right now
  displayFeatures(features) {
    return features;
  }

  render() {
    //const {squadName, features} = this.props;
    squadName = "MMUI";
    features = "TBD";
    return (
      <View>
        <Text>Dummy Feature</Text>
        <Text>Squad: {squadName}</Text>
        <Text>Features: {features}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('FeatureScreen', () => FeatureScreen);
