var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        console.log(this.refs.location.value + "from weatherform.jsx");
        this.props.onSearch(this.refs.location.value);
        this.refs.location.value = "";
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="location" placeholder="Enter city" />
                    <button className="button hollow">Get Weather</button>
                </form>
            </div>    
        )
    }
});

module.exports = WeatherForm;