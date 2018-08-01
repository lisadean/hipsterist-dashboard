import React from "react";
import "./weather.css";
import SearchBar from "./search_bar";
import WeatherDetail from "./weather_detail";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: [],
      weatherData: null
    };
  }

  render() {
    return (
      <div className="main-body container">
        <h4 className="weather-h1 text-center ">
          I liked the{" "}
          <span class="category ">
            <strong>WEATHER</strong>
          </span>{" "}
          before it was cool.
        </h4>
        <SearchBar className="text-center" handleSubmit={this._getData} />
        {this._renderWeatherInfo()}
      </div>
    );
  }

  //helper function to get data
  _getData = input => {
    console.log("about to fetch lat and long");
    fetch(this._formattedGeocodeUrl(input), {
      method: "get"
    })
      .then(response => {
        console.log("got the geocode");
        // console.log(response.json());
        return response.json();
      })
      .then(data => {
        console.log(data);
        let location = data.results[0].formatted_address;
        this.setState({ locationData: location });
        let lat = data.results[0].geometry.location.lat;
        let lng = data.results[0].geometry.location.lng;
        return fetch(this._formattedWeatherUrl(lat, lng), {
          method: "get"
        });
      })
      .then(weather_response => weather_response.json())
      .then(weather_data => {
        console.log(weather_data);
        this.setState({ weatherData: weather_data });
      });
  };

  //helper function to grab user input and insert into Geocode API string
  _formattedGeocodeUrl = input => {
    return `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=AIzaSyD5XrrqpfdzbKeFRmqQ1CpQuc0VzHxXZsU`;
  };

  //help function to pass lat and lng into Weather API string
  _formattedWeatherUrl = (lat, lng) => {
    return `https://my-little-cors-proxy.herokuapp.com/https://api.darksky.net/forecast/acaa4cb5e670e2bd00780293999e62e7/${lat},${lng}`;
  };

  //helper function to render weatherData when the information is recieved.
  _renderWeatherInfo = () => {
    if (this.state.weatherData) {
      return (
        <WeatherDetail
          locationInfo={this.state.locationData}
          weatherInfo={this.state.weatherData}
        />
      );
    } else {
      return null;
    }
  };

  _;
}

export default Weather;
