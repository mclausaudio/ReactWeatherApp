var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8ddaec64a602eee7da61c122ddcfbdad&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log(`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`);

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}