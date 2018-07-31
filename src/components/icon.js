import React from "react";
const Icon = ({ icon }) => {
  return (
    <div>
      <img src={_whatsTheImage(icon)} alt="weather icon" />
    </div>
  );
};

const _whatsTheImage = iconName => {
  switch (iconName) {
    //clear-day
    case "clear-day":
      return "";
    //clear-night
    case "clear-night":
      return "";
    //partly-cloudy-day
    case "partly-cloudy-day":
      return "";
    //partly-cloudy-night
    case "partly-cloudy-night":
      return "";
    //cloudy
    case "cloudy":
      return "";
    //rain
    case "rain":
      return "";
    //sleet
    case "sleet":
      return "";
    //snow
    case "snow":
      return "";
    //wind
    case "wind":
      return "";
    //fog
    case "fog":
      return "";
  }
};

export default Icon;
