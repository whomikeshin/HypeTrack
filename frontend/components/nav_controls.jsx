var React = require('react');
var PlayerStore = require('../stores/player');
var SessionStore = require('../stores/session');
var PlayerActions = require('../actions/player_actions');

function _isPlaying () {
  return PlayerStore.playStatus();
}

function _getCurrentTrack () {
  return PlayerStore.currentTrack();
}

var NavControls = React.createClass({
  getInitialState: function () {
    return {
      playStatus: _isPlaying(),
      currentTrack: null
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
        isPlaying = PlayerStore.isPlaying(),
        playPause;

    if (isPlaying) {
      playPause = <button
                    onClick={this._pauseTrack}
                    className="fa fa-pause">
                  </button>
    } else {
      playPause = <button
                    onClick={this._playTrack}
                    className="fa fa-play">
                  </button>
    }

    return (
      <ul className="nav-controls">
        <li><button
          onClick={this._prevTrack}
          className="fa fa-fast-backward"></button>
        </li>
        <li>{playPause}</li>
        <li><button className="fa fa-heart"></button></li>
        <li><button
          onClick={this._nextTrack}
          className="fa fa-fast-forward"></button>
        </li>
      </ul>
    );
  },

  _onPlayerChange: function () {
    this.setState({
      playStatus: _isPlaying(),
      currentTrack: _getCurrentTrack()
    });
  },

  _playTrack: function () {
    var currentTrack = this.state.currentTrack.trackData;
    PlayerActions.play(currentTrack.id);
  },

  _pauseTrack: function () {
    PlayerActions.pause();
  },

  _nextTrack: function () {
    PlayerActions.next();
  },

  _prevTrack: function () {
    PlayerActions.prev();
  }
});


module.exports = NavControls;
