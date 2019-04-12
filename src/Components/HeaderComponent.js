import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';


const HeaderComponent = () => (
        <Header style={styles.headerContainer}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Your Weather', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
)
const styles = StyleSheet.create({
	headerContainer: {
		flex: 1
	}
});
export default HeaderComponent