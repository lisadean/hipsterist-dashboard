import React from "react";
const Icon = ({ icon }) => {
  return (
    <div>
      {/*clear day  */}
      {/* <img src="http://weddingflowersbyjuliarose.com/wp-content/uploads/2016/12/Tommys-flower-beard_LoRes05-683x1024.jpg" /> */}
      {/* clear night */}
      {/* <img src="https://i.pinimg.com/originals/09/d7/01/09d701ad5aa681dc2281d63ee58493d3.jpg" />*/}
      {/* partly-cloudy-day */}
      {/* <img src="https://images.unsplash.com/photo-1527309195845-a455c2efbc94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f832a6a69f52f5ab39a3103df6690aa1&auto=format&fit=crop&w=800&q=60" /> */}
      {/* partly-cloudy-night */}
      {/* <img src="https://images.unsplash.com/photo-1452979081267-f541411cb48e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ee7b756cc40f94b526daddd2d6ade0b&auto=format&fit=crop&w=800&q=60" />*/}
      <img src={_whatsTheImage(icon)} alt="weather icon" />
    </div>
  );
};

const _whatsTheImage = iconName => {
  switch (iconName) {
    //clear-day
    case "clear-day":
      return "http://weddingflowersbyjuliarose.com/wp-content/uploads/2016/12/Tommys-flower-beard_LoRes05-683x1024.jpg";
    //clear-night
    case "clear-night":
      return "https://i.pinimg.com/originals/09/d7/01/09d701ad5aa681dc2281d63ee58493d3.jpg";
    //partly-cloudy-day
    case "partly-cloudy-day":
      return "https://images.unsplash.com/photo-1527309195845-a455c2efbc94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f832a6a69f52f5ab39a3103df6690aa1&auto=format&fit=crop&w=800&q=60";
    //partly-cloudy-night
    case "partly-cloudy-night":
      return "https://images.unsplash.com/photo-1452979081267-f541411cb48e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ee7b756cc40f94b526daddd2d6ade0b&auto=format&fit=crop&w=800&q=60";
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
