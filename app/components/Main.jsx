var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
        return (
            <div>
                <Nav />
                <div className="callout text-center content-container">
                    {props.children}
                </div>
            </div>
        )
}

module.exports = Main;