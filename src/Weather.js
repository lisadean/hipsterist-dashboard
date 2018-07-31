import React from "react";

// const Weather_URL =
//   "https://api.darksky.net/forecast/acaa4cb5e670e2bd00780293999e62e7/33.7490,-84.3880";
 const Google_URL=`https://maps.googleapis.com/maps/api/geocode/json?address=Atlanta&key=AIzaSyD5XrrqpfdzbKeFRmqQ1CpQuc0VzHxXZsU`

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      date: "",
      weather: "",
      icon: "",
      tempF: "",
      humidity: "",
      windMPH: "",
      precipitation: "",
      uv: ""
    };
  }

  render() {
    return (
      <div>
        <h1>I liked the WEATHER before it was cool.</h1>
        <h3>Atlanta, GA</h3>
        <p>Mon July 30 1:33</p>
        <p>Cloudy with a side of meatballs</p>
        <img src="#" alt="weather icon" />
        <h2>
          80<span>&deg; F</span>
        </h2>
        <p>Humidity: </p>
        <p>Wind: </p>
        <p>Precipitation:</p>
        <p>UV: </p>
        <form>
          <input type="text" placeholder="City, State or Zip Code" />
          <button type="submit">Submit</button>
        </form>
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
        console.log(response.json());
        return response.json();
    })
    .then(jsonData)
  };
  //get lat and lon

  //get weather infor based on search
}

export default Weather;
