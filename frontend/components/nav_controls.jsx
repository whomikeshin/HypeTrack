var React = require('react');
var PlayerStore = require('../stores/player');
var SessionStore = require('../stores/session');
var TrackStore = require('../stores/track');
var PlayerActions = require('../actions/player_actions');

function _isPlaying () {
  return PlayerStore.playStatus();
}

var NavControls = React.createClass({
  getInitialState: function () {
    return {
      playStatus: _isPlaying()
    };
  },

  componentWillMount: function () {
    this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
  },

  componentWillUnmount: function () {
    this.onPlayerChangeToken.remove();
  },

  render: function () {
    var currentUser = SessionStore.currentUser(),
        playPause,
        isPlaying = PlayerStore.isPlaying();

    if (isPlaying) {
      playPause = <button
                    className="fa fa-pause">
                  </button>
    } else {
      playPause = <button
                    className="fa fa-play">
                  </button>
    }

    return (
      <ul className="nav-controls">
        <li><button className="fa fa-fast-backward"></button></li>
        <li>{playPause}</li>
        <li><button className="fa fa-heart"></button></li>
        <li><button
          onClick={this._nextTrack()}
          className="fa fa-fast-forward"></button>
        </li>
      </ul>
    );
  },

  _onPlayerChange: function () {
    this.setState({
      playStatus: _isPlaying(),
    });
  },

  _nextTrack: function (e) {
    if (!PlayerStore._currentTrack === null) {
      PlayerActions.next();
      console.log("Next Pressed!")
    }
  }
});


module.exports = NavControls;
