var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>To use, simply enter the city that's weather information you'd like to view.  This weather applicatiion was built by <a href="https://github.com/mclausaudio" target="_blank">Michael Claus</a> using the following technologies:</p>
                <ul className="technology-list text-center">
                    <li><a href="https://reactjs.org/" target="_blank">React</a> - React (sometimes React.js or ReactJS) is a JavaScript library for building user interfaces.  It is maintained by Facebook, Instagram and a community of individual developers and corporations.  React can be used in the development of single-page applications and mobile applications.</li>
                    <li><a href="https://foundation.zurb.com/" target="_blank">Foundation</a> - Foundation is a responsive front-end framework. Foundation provides a responsive grid and HTML and CSS UI components, templates, and code snippets, including typography, forms, buttons, navigation and other interface elements, as well as optional functionality provided by JavaScript extensions.</li>
                    <li><a href="https://openweathermap.org/" target="_blank">OpenWeatherMap API</a> - OpenWeatherMap is an online service that provides weather data, including current weather data, forecasts, and historical data to the developers of web services and mobile applications. For data sources, it utilizes meteorological broadcast services, raw data from airport weather stations, raw data from radar stations, and raw data from other official weather stations.</li>
                </ul>
            </div>
        )
    }
});

module.exports = About;