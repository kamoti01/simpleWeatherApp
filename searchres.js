import React from 'react'
import {View, Text} from 'react-native'

const SearchRes = (props) => {
  tes = {};
  getWeather = (searchcity) =>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&APPID=d5c4535176f26fadb5d929c834e15321&units=metric`)
  .then(res => res.json())
  .then(json => {
    this.tes = json
  })
  .catch((err) => {console.error(err);});

  };
  this.getWeather(props.searchTerm);
  stringtes =JSON.stringify(tes);
  return(
    <View >
      <Text style={{marginTop: 100}}>Search Results: 
        {this.stringtes}
      </Text>
    </View>
    );
}

/*getWeather = (props) =>{
//  fetch(`https://api.openweathermap.org/data/2.5/weather?q={searchcity}&APPID=d5c4535176f26fadb5d929c834e15321&units=metric`)
 // .then(res => res.json())
  //.then(json => {
    this.setState({

      temperature: 90,//json.main.temp,
      weatherCondition: "hot",//json.weather[0].main,
      city: props,//json.name,
      country: "zm"//json.sys.country
    });
  //})
 // .catch((err) => {console.error(err);});

  }*/
//

export default SearchRes