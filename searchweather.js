export const SearchWeatherAPI = (props) => {
  let cityname = props.toLowerCase().trim();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=d5c4535176f26fadb5d929c834e15321&units=metric`;
  return fetch(url)
  			.then(res => res.json())
  			.catch((err) => {console.error(err);});

  }