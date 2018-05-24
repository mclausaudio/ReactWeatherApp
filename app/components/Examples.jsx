var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1>Examples</h1>
      <p>Here are a few example locations to search for:</p>
      <ul className="example-list">
        <li>
          <Link to='/?location=Portland'>Portland, Oregon</Link>
        </li>
        <li>
          <Link to='/?location=Miami'>Miami, Florida</Link>
        </li>
        <li>
          <Link to='/?location=Lisbon'>Lisbon, Portugal</Link>
        </li>
      </ul>
    </div>
  )
};

module.exports = Examples;