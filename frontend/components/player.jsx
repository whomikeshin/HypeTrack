var React = require('react');
var PlayerStore = require('../stores/player');
var TrackStore = require('../stores/track');
var UserMenu = require('./user/user_menu');

var Player = React.createClass({
  render: function () {
    return (
      <div className="player">
        <nav className="player-nav group">
          <div className="player-controls">
            Player Controls
          </div>

          <div className="user-menu">
            <div className="user-buttons">
              <UserMenu />
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Player;
