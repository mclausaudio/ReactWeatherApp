var React = require('react');

var ErrorMessage = ({errorMessage}) => {

  return (
    <div className="callout alert large text-center">
      <h3>Error</h3>
      <p >{(errorMessage.message.charAt(0).toUpperCase()) + (errorMessage.message.slice(1))}</p>
    </div>
    )
  
};

module.exports = ErrorMessage;