import React, {Component} from 'react'
import {View, Platform, ImageBackground, Button} from 'react-native'
import {Text} from 'react-native-elements'
import { Constants, Location, Permissions } from 'expo'
import HeaderComponent from './src/Components/HeaderComponent'
import BackgroundLoading from './BackgroundLoading.js'

export default class AppHome extends Component {
  static navigationOptions = {
    title: 'Your Weather',
    headerStyle: {
    backgroundColor: '#f4511e',
    },
    headerTintColor: '#000',
  };

	state = {
		isLoading: true,
		location: null,
		city: null,
		country: null,
		errorMessage: null
	};
	componentDidMount(){
		if (Platform.OS == 'android' && !Constants.isDevice){
			this.setState({errorMessage: 'App requires actual device. Location API does not work on simulator.'});
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
		this.setState({location, isLoading:false});
		if (this.state.location) {
			this._getWeatherInfo(this.state.location.coords.latitude, this.state.location.coords.longitude)
		}else {
			this._setWeatherDefault();
		}
		
	};
	_getWeatherInfo (lat, lon) {
		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=d5c4535176f26fadb5d929c834e15321&units=metric`)
		.then(res => res.json())
		.then(json => {
			this.setState({
			temperature: json.main.temp,
			weatherCondition: json.weather[0].main,
			city: json.name,
			country: json.sys.country,
			isLoading: false
			});
		})
		.catch((err) => {console.error(err);});
		};

		_setWeatherDefault () {
			let defaultLocation = "Lusaka";
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&APPID=d5c4535176f26fadb5d929c834e15321&units=metric`)
			.then(res => res.json())
			.then(json => {
				this.setState({
				temperature: json.main.temp,
				weatherCondition: json.weather[0].main,
				city: json.name,
				country: json.sys.country,
				isLoading: false
				});
			})
			.catch((err) => {console.error(err);});
			};

	render(){
		const {navigate} = this.props.navigation;
		const justifyPic = 'center'
		if (this.state.isLoading) {
			return (<BackgroundLoading />);
		}
		return(
			<View style={{flex:1}}>
				<ImageBackground 
					style = {{flex:1, justifyPic, 
					width:'100%', height:'100%'}}
					source = {require('./src/Images/trail.jpg')}
				>
				<View style={{color: '#fff', fontWeight: 'bold', alignItems: 'center'}}>
					<Text style={{color:"#fff", marginTop:30}} h3>{this.state.city}, {this.state.country}</Text>
					<Text style={{color:"#fff", marginTop: 30}} h1>{this.state.temperature}°C</Text>
					<Text style={{color:"#fff", marginTop:30}} h4>{this.state.weatherCondition}</Text>

				</View>
				<View style={{marginTop:50, width: '90%', marginLeft: '5%'}}>
		        <Button
			        title="Search"
			        onPress={() => this.props.navigation.navigate('ButtonNavigate')}
		        	style={{ }}
		        />
		        </View>
				</ImageBackground>
			</View>
		);
	}
}