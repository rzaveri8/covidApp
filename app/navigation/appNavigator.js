import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import mapScreen from '../screens/mapScreen';
import Home from '../screens/homeScreen';
import dataScreen from '../screens/dataScreen';
import summaryScreen from '../screens/summaryScreen'
import searchScreen from '../screens/searchScreen'


const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  DataScreen: { screen: dataScreen},
  MapScreen: { screen: mapScreen },
  SearchScreen: {screen: searchScreen},
  SummaryScreen: {screen: summaryScreen}
});

export default createAppContainer(AppNavigator);