import React from "react";
import Icon from './icon';

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
      <p>{weatherInfo.currently.summary}</p>
      
      <Icon 
      icon={weatherInfo.currently.icon}/>
      <h2>
        {weatherInfo.currently.apparentTemperature}<span>&deg; F</span>
      </h2>
      <p>Humidity: {weatherInfo.currently.humidity} %</p>
      <p>Wind: {weatherInfo.currently.windSpeed} mph </p>
      <p>Precipitation: {weatherInfo.currently.precipIntensity}</p>
      <p>UV Index: {weatherInfo.currently.uvIndex} </p>
    </div>
  );
};

export default WeatherDetail;
