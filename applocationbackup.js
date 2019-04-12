import React, {Component} from 'react'
import {View, Platform} from 'react-native'
import { Constants, Location, Permissions } from 'expo'
import BackgroundLoading from './BackgroundLoading.js'
import BackgroundImage from './src/Components/BackgroundImage.js'

export default class App extends Component {
	state = {
		isLoading: true,
		location: null,
		errorMessage: null
	};
	componentDidMount(){
		if (Platform.OS == 'android' && !Constants.isDevice){
			this.setState({errorMessage: 'App requires actual device. Location does not work on simulator.'});
		}else{
			this._getLocationAsync();			
		}	
	};
	_getLocationAsync = async() =>{
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted'){
			this.setState({
				errorMessage: 'Location access denied.'
			});
		}
		let location =await Location.getCurrentPositionAsync({enableHighAccuracy: true});
		this.setState({location});
		if (this.state.location) {
			this.setState({isLoading: false})
		}		
	};
	render(){
		if (this.state.isLoading) {
			return (<BackgroundLoading />);
		}
		return (<BackgroundImage />);
	}
}