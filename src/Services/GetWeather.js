import React, {Component} from 'react'

	const GetWeather = ({city}) =>{
		fetch(`https://api.openweathermap.org/data/2.5/weather?q={city}&APPID=d5c4535176f26fadb5d929c834e15321`)
		.then(res => res.json())
		.then(json => {
			this.setState({
			temperature: json.main.temp,
			weatherCondition: json.weather[0].main
			});
		})
		.catch((err) => {console.error(err);});
		
		render(){
			return(
				<View></View>);
		}
		};


export default GetWeather