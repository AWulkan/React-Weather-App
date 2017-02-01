const React = require("react");

const About = (props) => {
    return (
        <div>
            <h2 className="text-center">About</h2>
            <p>
                This is a weather application built with React. 
                I built this for "The Complete React Web App Developer Course"
            </p>

            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the 
                    Javascript framework I used.
                </li>
                <li>
                    <a href="https://openweathermap.org/">Open Weather Map</a> - 
                    I used Open Weather Map to search for weather data by city name.                
                </li>
            </ul>
        </div>
    );
};

module.exports = About;
