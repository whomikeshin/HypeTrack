var React = require('react');
var ApiUtil = require('../util/api_util');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div>
        <h1>Please Log In</h1>
      </div>
    );
  }
});

module.exports = LoginForm;
