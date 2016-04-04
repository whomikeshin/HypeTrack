var React = require('react');
var PlayerStore = require('../stores/player');
var TrackStore = require('../stores/track');

var Player = React.createClass({
  render: function () {
    return (
      <div className="player-controls">
        Player Controls
      </div>
    );
  }
});

module.exports = Player;
