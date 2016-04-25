var React = require('react');

var Loader = React.createClass({

  render: function () {
    return (
      <div className="loader">
        <img src='http://sierrafire.cr.usgs.gov/images/loading.gif'></img>
      </div>
    );
  }
});

module.exports = Loader;
