import React, {Component} from 'react'
import {View, Text, Platform} from 'react-native'
import { Constants, Location, Permissions } from 'expo'
import LandingPage from './src/Components/LandingPage.js'
//import API_KEY from './Services/API_KEY.js'

export default class App extends Component {
	state = { 
		location: null,
		errorMessage: null,
		temperature: 0,
		weatherCondition: null,
	};
	//deprecated
	componentWillMount(){
		if (Platform.OS == 'android' && !Constants.isDevice){
			this.setState({errorMessage: 'App requires actual device. Location does not work on simulator.'});
		}else{
			this._getLocationAsync();			
		}
	}

	_getLocationAsync = async() =>{
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted'){
			this.setState({
				errorMessage: 'Location access denied.'
			});
		}
		let location =await Location.getCurrentPositionAsync({enableHighAccuracy: true});
		this.setState({location});		
	};

	componentDidMount(){
		if (this.state.errorMessage){
			console.error(this.state.errorMessage)
		}else if (this.state.location){
			this._getWeatherInfo(this.state.location.coords.latitude, this.state.location.coords.longitude)
		}
	}
	_getWeatherInfo (lat, lon) {
		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=d5c4535176f26fadb5d929c834e15321`)
		.then(res => res.json())
		.then(json => {
			this.setState({
			temperature: json.main.temp,
			weatherCondition: json.weather[0].main
			});
		})
		.catch((err) => {console.error(err);});
		};
  render(){

    return(
      <View style={{flex:1, paddingTop: 100}}>
      	<Text>{this.state.location.coords.latitude} latitude</Text>
      	<Text>{this.state.location.coords.longitude} longitude</Text>
        <Text>{this.state.weatherCondition} weatherCondition</Text>
        <Text>{this.state.temperature} Degrees</Text>
        
      </View>
      );
  }
}

