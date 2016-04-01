var React = require('react');
var TrackStore = require('../../stores/track');
var ApiUtil = require('../../util/api_util');
var TrackIndexItem = require('./index_item');

var Show = React.createClass({
  render: function () {
    return (
        <h2>Track</h2>
    );
  }
});

module.exports = Show;
