var React = require('react');
// var PlayerStore = require('../stores/player');
var TrackStore = require('../stores/track');

var Player = React.createClass({
  render: function () {
    return (
      <div className="player">
        <nav className="player-nav group">
          <div className="player-controls">
            Player Controls
          </div>

          <div className="user-menu">
            User menu
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Player;
