import React from 'react';
import { StyleSheet, Text, View, PermissionsAndroid, Alert } from 'react-native'
import {Header, Tile} from 'react-native-elements'
import HeaderComponent from './HeaderComponent.js'
import SwichExample from './GeoLocationComponent.js'

async function requestcurrentlocation() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Your Weather app Permission',
        message:
          'Your Weather App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Location permission granted');
    } else {
      Alert.alert('location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
export default class App extends React.Component {
    async componentDidMount() {
 
    await requestcurrentlocation()
 
  }
  render() {
    return (
      <View style={styles.container}
      imageSrc={require('./assets/2864.jpg')}>
      <HeaderComponent />
        <Tile style={styles.tile_style}
          imageSrc={require('./assets/hotel-chip.jpg')}
          title="Your Weather"
          featured
          caption="Everyday."
        />
        <SwichExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    /**flex: 1,**
    backgroundColor: '#fff',*/
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile_style: {
    flex: 1
  }
});
