import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import SearchWeather from './searchcomponent.js'

export default class SearchButtonNavigate extends Component {
	render(){
		return(
			<View style={styles.container}>
			<SearchWeather />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#C6ECEB',
		paddingTop: 150,
		flex: 1,
	}
});