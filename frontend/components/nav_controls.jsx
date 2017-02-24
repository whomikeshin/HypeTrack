var React = require('react');
var PlayerStore = require('../stores/player');
var SessionStore = require('../stores/session');
var TrackStore = require('../stores/track');
var PlayerActions = require('../actions/player_actions');
var FavoriteButton = require('./track/favorite_button');

function _getIsPlaying () {
  return PlayerStore.isPlaying();
}

function _getCurrentTrack () {
  return PlayerStore.currentTrack();
}

function _findCurrentTrack (trackId) {
  return TrackStore.find(trackId);
}

function _getCurrentUser () {
  return SessionStore.currentUser();
}

var NavControls = React.createClass({
  getInitialState: function () {
    return {
      isPlaying: _getIsPlaying(),
      currentTrack: _getCurrentTrack(),
      // currentUser: null,
      favTrack: null
    };
  },

  componentDidMount: function () {
    this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
    this.onTrackChangeToken = TrackStore.addListener(this._onTrackChange);
  },

  componentWillUnmount: function () {
    this.onPlayerChangeToken.remove();
    this.onTrackChangeToken.remove();
  },

  render: function () {
    var currentUser = _getCurrentUser(),
        currentTrack = this.state.currentTrack,
        isPlaying = this.state.isPlaying,
        favTrack = this.state.favTrack,
        playPause,
        favButton;

    if (isPlaying) {
      playPause = <button
                    onClick={this._pauseTrack} className="fa fa-pause">
                  </button>
    } else {
      playPause = <button
                    onClick={this._playTrack} className="fa fa-play">
                  </button>
    }

    if (currentTrack) {
      if (!favTrack) {
        favTrack = _findCurrentTrack(currentTrack.trackData.id);
      }
      favButton = <FavoriteButton user={currentUser} track={favTrack}/>
    } else {
      favButton = <button className="fa fa-heart"></button>
    }

    return (
      <ul className="nav-controls">
        <li><button
          onClick={this._prevTrack}
          className="fa fa-fast-backward"></button>
        </li>
        <li>{playPause}</li>
        <li>{favButton}</li>
        <li><button
          onClick={this._nextTrack}
          className="fa fa-fast-forward"></button>
        </li>
      </ul>
    );
  },

  _onPlayerChange: function () {
    this.setState({
      isPlaying: _getIsPlaying(),
      currentTrack: _getCurrentTrack()
    });
  },

  _onTrackChange: function () {
    var currentTrack = this.state.currentTrack;
    if (currentTrack) {
      this.setState({
        favTrack: _findCurrentTrack(currentTrack.trackData.id)
      })
    }
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
