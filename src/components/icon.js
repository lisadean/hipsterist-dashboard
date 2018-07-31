import React from "react";
const Icon = ({ icon }) => {
  return (
    <div className="image-hipster">
      {/*clear day  */}
      {/* <img src="http://weddingflowersbyjuliarose.com/wp-content/uploads/2016/12/Tommys-flower-beard_LoRes05-683x1024.jpg" /> */}
      {/* clear night */}
      {/* <img src="https://i.pinimg.com/originals/09/d7/01/09d701ad5aa681dc2281d63ee58493d3.jpg" />*/}
      {/* partly-cloudy-day */}
      {/* <img src="https://images.unsplash.com/photo-1527309195845-a455c2efbc94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f832a6a69f52f5ab39a3103df6690aa1&auto=format&fit=crop&w=800&q=60" /> */}
      {/* partly-cloudy-night */}
      {/* <img src="https://images.unsplash.com/photo-1452979081267-f541411cb48e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ee7b756cc40f94b526daddd2d6ade0b&auto=format&fit=crop&w=800&q=60" />*/}
      {/* cloudy */}
      {/* <img src="https://images.unsplash.com/photo-1502869481858-fbd5ad6bc56f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d07ef28c675f65dae34e666ac4832729&auto=format&fit=crop&w=800&q=60" /> */}
      {/* rain */}
      {/* <img src="https://beardoholic.com/wp-content/uploads/2016/10/bart.jpg" */}
      {/* sleet */}
      {/* <img src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjTyIfn98ncAhVJylMKHW2cClwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fgrit211%2Fbeard-time%2F&psig=AOvVaw0KiJwk2slP36hrtRivpWBr&ust=1533146933422810"/> */}
      {/* fog */}
      {/* <img src="https://images.unsplash.com/photo-1525186986620-5a05ad7a000f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bdfe8aca9a263da669676d576f863e99&auto=format&fit=crop&w=1400&q=80" />*/}

      <img
        className="img-fluid"
        src={_whatsTheImage(icon)}
        alt={icon}
        title={icon}
      />
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
      return "https://images.unsplash.com/photo-1502869481858-fbd5ad6bc56f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d07ef28c675f65dae34e666ac4832729&auto=format&fit=crop&w=800&q=60";
    //rain
    case "rain":
      return "https://beardoholic.com/wp-content/uploads/2016/10/bart.jpg";
    //sleet
    case "sleet":
      return "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjTyIfn98ncAhVJylMKHW2cClwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fgrit211%2Fbeard-time%2F&psig=AOvVaw0KiJwk2slP36hrtRivpWBr&ust=1533146933422810";
    //snow
    case "snow":
      return "https://previews.123rf.com/images/photosvit/photosvit1701/photosvit170101758/69876095-handsome-man-or-lumberjack-bearded-hipster-with-beard-and-moustache-wrapped-in-plaid-blanket-stands-.jpg";
    //wind
    case "wind":
      return "https://s1.favim.com/610/201109/16/Favim.com-beach-clothes-day-fashion-fun-145849.jpg";
    //fog
    case "fog":
      return "https://images.unsplash.com/photo-1525186986620-5a05ad7a000f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bdfe8aca9a263da669676d576f863e99&auto=format&fit=crop&w=1400&q=80";
  }
};

export default Icon;
