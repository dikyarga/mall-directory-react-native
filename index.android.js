/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
// import { StackNavigator } from 'react-navigation';


import App from './src/App'

export default class MatoryMobileApp extends Component {
  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('MatoryMobileApp', () => MatoryMobileApp);
