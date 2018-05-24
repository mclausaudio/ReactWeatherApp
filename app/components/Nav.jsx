var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        var location = this.refs.navSearchLocation.value;
        
        var encodedLocation = encodeURIComponent(location);
        
        if (location.length > 0) {
            this.refs.navSearchLocation.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render: function() {
        return (
            <div>
                <div className="top-bar">
                  <div className="top-bar-left">
                   <ul className="menu">
                    <li className="menu-text">React Weather</li>
                    <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                    <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                    <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                   </ul>
                  </div>
                  <div className="top-bar-right">
                  <form onSubmit={this.onSearch}>
                    <ul className="menu">
                      <li><input type="search" placeholder="Enter city"  ref="navSearchLocation"/></li>
                      <li><input type="submit" className="button" value="Search" /></li>
                    </ul>
                    </form>
                  </div>
                </div>
            </div>
        )
    }
})

module.exports = Nav;