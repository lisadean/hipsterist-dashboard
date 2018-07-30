import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>I liked the WEATHER before it was cool.</h1>
        <h3>Atlanta, GA</h3>
        <p>Mon July 30 1:33</p>
        <p>Cloudy with a side of meatballs</p>
        <img src="#" alt="weather icon"/>
        <h2>80<span>&deg; F</span></h2>
        <p>Humidity: </p>
        <p>Wind: </p>
        <p>Precipitation:</p>
        <p>UV: </p>

      </div>
    );
  }
}

export default Weather;
