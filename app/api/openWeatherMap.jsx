const axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?&appid=924312b06b6b0478955a0e4888e6828e&units=metric";

// 924312b06b6b0478955a0e4888e6828e

module.exports = {
    getTemp: function (location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
};
