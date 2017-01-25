const React = require("react");
const WeatherForm = require("WeatherForm");
const WeatherMessage = require("WeatherMessage");

const Weather = React.createClass({
    getInitialState: function () {
        return {
            location: "Sweden",
            temp: -4
        }
    },

    handleSearch: function (location) {
        this.setState({
            location: location,
            temp: 23
        });
    },

    render: function () {
        let {temp, location} = this.state;

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage temp={temp} location={location}/>
            </div>
        );
    }
});

module.exports = Weather;
