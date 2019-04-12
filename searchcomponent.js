import React, {Component} from 'react'
import { SearchBar } from 'react-native-elements'
import {View, TextInput, TouchableHighlight} from 'react-native'
import {Text} from 'react-native-elements'
import SearchRes from './searchres.js'
import {SearchWeatherAPI} from './searchweather.js'



export default class SearchWeather extends React.Component {

  state = {
    search: '',
    searchEnd: false,
    temperature: 0,
    weatherCondition: null,
    city: null,
    country: null,
    error: '',
    isRespReady: false
  }

  updateSearch = (e) => {
    this.setState({ search: e.nativeEvent.text });
  };
  endSearch = () => { 
    this.setState({searchEnd: true});
    this.executeSearch(this.state.search);
  };
  executeSearch = (e) => {
      searchlocation = e;
      SearchWeatherAPI(searchlocation)
        .then((res) => {
          if(res.message === 'city not found' || res.message === 'Nothing to geocode') {
            this.setState({
                error: 'City not found. Enter a valid city name',
                isRespReady: true,
            });
          }else {
            this.setState({
              temperature: res.main.temp,
              weatherCondition: res.weather[0].main,
              city: res.name,
              country:res.sys.country,
              isRespReady: true,
            });
          }
      })
       .catch((err) => {console.error(err);});
  }; 
  render() {
    if (this.state.search !=='' && this.state.searchEnd && this.state.error === ''){
      return(
        <View style={{backgroundColor: '#C6ECEB', alignItems: 'center'}}>
        <Text style={{color:"#000", marginTop:30}} h1>{this.state.city}, {this.state.country}, </Text>
        <Text style={{color:"#000", marginTop:30}} h3>{this.state.temperature} °C</Text>
        <Text style={{color:"#000", marginTop:30}} h4> {this.state.weatherCondition}</Text>
        </View>
        );
    }
    if (this.state.error !== '' && this.state.searchEnd){
      return(
        <View style={{backgroundColor: '#C6ECEB', alignItems: 'center'}}>
          <Text style={{color:"#000", marginTop:30}} h1>{this.state.error}</Text>
        </View>
        );
    } 
    return(
      <View style={{backgroundColor: '#C6ECEB', alignItems: 'center'}}>
        <TextInput  style={{backgroundColor: '#DFE3E6',
         height: 50, width: 300, borderRadius: 5 }} 
         onChange={this.updateSearch}
         placeholder = " Search for places..."
        />
        <TouchableHighlight
          style={{backgroundColor: '#105998', borderRadius: 5,
          height: 50, width: 300, marginTop: 10, justifyContent: 'center',
           alignItems: 'center'}}
            underlayColor= "#DFE3E6"
            onPress = {this.endSearch}
          >
            <Text style={{color: 'white'}}> Submit
              </Text>
            </TouchableHighlight>
            
      </View>
      );
  }0
}
