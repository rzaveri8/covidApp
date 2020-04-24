// App.js

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator, createAppContainer } from 'react-navigation';
import AppNavigator from './app/navigation/appNavigator'


export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
 }