import React from "react";
import SearchBar from "./search_bar";
import WeatherDetail from "./weather_detail";


   
 const Google_URL=`https://maps.googleapis.com/maps/api/geocode/json?address=Atlanta&key=AIzaSyD5XrrqpfdzbKeFRmqQ1CpQuc0VzHxXZsU`

class Weather extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: []
      } 
  }

  render() {
    return (
      <div>
        <h1>I liked the WEATHER before it was cool.</h1>
        <SearchBar />
        <WeatherDetail />
      </div>
    );
  }

  componentDidMount(){
      this._getData();
  }

  _getData = () => {
    console.log("about to fetch lat and long");
    fetch(Google_URL, {
      method: "get"
    })
    .then(response =>{
        console.log('got the geocode')
        // console.log(response.json());
         return response.json();    
    }).then((data => {
        console.log(data)
        let lat = data.results[0].geometry.location.lat;
        let lng = data.results[0].geometry.location.lng;
        return fetch(this._formattedWeatherUrl(lat,lng), {
          method: "get"
        })
    })).then((weather_response => weather_response.json()))
    .then(weather_data => {
      console.log(weather_data)
      this.setState({data: weather_data})
    })
  };

  //get lat and lon
  _formattedWeatherUrl = (lat, lng ) => {
    return `https://my-little-cors-proxy.herokuapp.com/https://api.darksky.net/forecast/acaa4cb5e670e2bd00780293999e62e7/${lat},${lng}`;
  }
  //get weather infor based on search
}

export default Weather;
