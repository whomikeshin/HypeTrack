var React = require('react');

var Loader = React.createClass({

  render: function () {
    return (
      <div id="loader">
        <img src='https://d13yacurqjgara.cloudfront.net/users/194846/screenshots/1452453/loadingspinner.gif'></img>
      </div>
    );
  }
});

module.exports = Loader;
