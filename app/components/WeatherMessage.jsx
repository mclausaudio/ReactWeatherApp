var React = require('react');

var WeatherMessage = ({temp, location, weatherIcon, weatherStatus, weatherDescription}) => {
  return (
    <div className="callout primary large text-center">
      <h3>It's it {temp} in {location}.</h3>
      <p>Current conditions are:</p>
      <p>{weatherStatus} <img src={"http://openweathermap.org/img/w/" + weatherIcon + ".png"} /> with {weatherDescription}</p>
    </div>
  )
};

module.exports = WeatherMessage;