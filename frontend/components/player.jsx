var React = require('react');
var PlayerStore = require('../stores/player');
var TrackStore = require('../stores/track');

var Player = React.createClass({
  render: function () {
    return (
      <div className="player-controls">
        <audio controls>
          <source src="https://s3.amazonaws.com/hype-train-dev/seed-audio/Gallant+-+Weight+In+Gold.mp3"/>
          <source src="https://s3.amazonaws.com/hype-train-dev/seed-audio/Kanye+-+Fade.mp3"/>
        </audio>
      </div>
    );
  }
});

module.exports = Player;
