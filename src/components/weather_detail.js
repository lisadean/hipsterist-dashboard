import React from "react";

const WeatherDetail = ({ locationInfo, weatherInfo }) => {
  console.log(weatherInfo);
  //Does it exist and does it have a currently. If so(true), then make a date object and get the string version if it.
  //Times by 1000 because we want milliseconds
  //toLocaleString makes it readable regardless of how your country formats the date
  const time =
    weatherInfo && weatherInfo.currently
      ? new Date(weatherInfo.currently.time * 1000).toLocaleString()
      : "";
  return (
    <div>
      <h3>{locationInfo}</h3>
      <p>{time}</p>
      <p>Cloudy with a side of meatballs</p>
      <img src="#" alt="weather icon" />
      <h2>
        80<span>&deg; F</span>
      </h2>
      <p>Humidity: </p>
      <p>Wind: </p>
      <p>Precipitation:</p>
      <p>UV: </p>
    </div>
  );
};

export default WeatherDetail;
