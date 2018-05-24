var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorMessage = require('ErrorMessage');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false,
        }
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({
            isLoading: true,
            location: location,
            temp: undefined,
            weatherIcon: undefined,
            weatherStatus: undefined,
            weatherDescription: undefined
        })
        OpenWeatherMap.getTemp(location).then(function(data){
            that.setState({
                temp: data.main.temp,
                isLoading: false,
                weatherIcon: data.weather[0].icon,
                weatherStatus: data.weather[0].main, 
                weatherDescription: data.weather[0].description
            })
        }, function (error){
                console.log(error.message)
                that.setState({
                    errorMessage: error,
                    isLoading: false
                });
        });
    },
    componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
    render: function () {
        var {location, temp, errorMessage, isLoading, weatherIcon, weatherStatus, weatherDescription} = this.state;
        var that = this;
    
        var renderMessage = function () {
            if (isLoading) {
             return <p>Fetching data...</p>;   
            } else if (typeof temp === 'number'){
                return <WeatherMessage temp={temp} location={location} weatherIcon={weatherIcon} weatherStatus={weatherStatus} weatherDescription={weatherDescription} />
            } else if (errorMessage) {
                return <ErrorMessage errorMessage={errorMessage} />; 

            }
        }
    
        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;