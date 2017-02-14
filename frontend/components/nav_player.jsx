var React = require('react');
var PlayerStore = require('../stores/player');
var Loader = require('./loader');
var NavControls = require('./nav_controls');

function _getCurrentTrack () {
  return PlayerStore.currentTrack();
}

function _getAllTracks () {
  return PlayerStore.all();
}

function _isPlaying () {
  return PlayerStore.playStatus();
}

var NavPlayer = React.createClass({

  getInitialState: function () {
    return {
      currentTrack: null,
      tracks: _getAllTracks(),
      playStatus: _isPlaying()
    };
  },

  componentWillMount: function () {
    this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
    ApiUtil.fetchTracks();
  },

  componentWillUnmount: function () {
    this.onPlayerChangeToken.remove();
  },

  render: function () {
    var tracks = this.state.tracks;
    var track = this.state.currentTrack || tracks[0];
    var playStatus = this.state.playStatus;

    if (!track) {
      return <Loader/>;
    } else {
      return (
      <div>
        <div>
          <audio src={track.value.audio_file_name}>
          </audio>
        </div>

        <ul id="current-track">
          <li>{track.value.title}</li>
          <li>-</li>
          <li>{track.value.artist_name}</li>
          <li><a href={track.value.posts[0].post_url}>
            <small>Read Post →</small></a></li>
        </ul>
      </div>
      );
    }
  },

  _onPlayerChange: function () {
    this.setState({
      currentTrack: _getCurrentTrack(),
      tracks: _getAllTracks(),
      playStatus: _isPlaying()
    });
  },
});


module.exports = NavPlayer;
