const React = require("react");

const WeatherMessage = ({temp, location}) => {

    return (
        <h3 className="text-center">It's {temp}°C in {location}</h3>
    );
};

module.exports = WeatherMessage;
