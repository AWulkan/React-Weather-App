const React = require("react");
const WeatherForm = require("WeatherForm");
const WeatherMessage = require("WeatherMessage");
const openWeatherMap = require("openWeatherMap");

const Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },

    handleSearch: function (location) {
        let that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });
    },

    render: function () {
        let {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (location && temp !== null) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        return (
            <div>
                <h2 className="text-center">Get Weather</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
