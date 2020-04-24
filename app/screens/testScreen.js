
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Test extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          //Longitutde and latitude of bu photonics building
        latitude: 42.349595,
        longitude: -71.10667,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}}
      />
      
    );
  }
}
