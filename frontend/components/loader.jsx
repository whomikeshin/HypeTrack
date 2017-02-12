var React = require('react');

var Loader = React.createClass({

  render: function () {
    return (
      <div id="loader">
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'></img>
      </div>
    );
  }
});

module.exports = Loader;
