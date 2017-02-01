const React = require("react");
const {Link} = require("react-router");

const Examples = (props) => {
    return (
        <div>
            <h2 className="text-center">Examples</h2>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Gothenburg">Gothenburg</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>                
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;
