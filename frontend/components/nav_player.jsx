var React = require('react');
var PlayerStore = require('../stores/player');
var Loader = require('./loader');
var NavControls = require('./nav_controls');

function _getCurrentTrack () {
  return PlayerStore.currentTrack();
}

function _getLoadedTracks () {
  var tracks = [];
  var cache = PlayerStore.all();
  while (true) {
    tracks.push(cache.list.next.value);
    if (cache.list.next === null) {
      break;
    }
  }
  return tracks;
}

function _isPlaying () {
  return PlayerStore.playStatus();
}

var NavPlayer = React.createClass({

  getInitialState: function () {
    return {
      currentTrack: null,
      loadedTracks: _getLoadedTracks(),
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
    var loadedTracks = this.state.loadedTracks;
    var track = this.state.currentTrack
      || loadedTracks[parseInt(Object.keys(loadedTracks)[0])];
    var playStatus = this.state.playStatus;

    if (!track) {
      return <Loader/>;
    } else {
      return (
      <div>
        <div>
          <audio src={track.trackInfo.audio_file_name}>
          </audio>
        </div>

        <ul id="current-track">
          <li>{track.trackInfo.title}</li>
          <li>-</li>
          <li>{track.trackInfo.artist_name}</li>
          <li><a href={track.trackInfo.posts[0].post_url}>
            <small>Read Post →</small></a></li>
        </ul>
      </div>
      );
    }
  },

  _onPlayerChange: function () {
    this.setState({
      currentTrack: _getCurrentTrack(),
      loadedTracks: _getLoadedTracks(),
      playStatus: _isPlaying()
    });
  },
});


module.exports = NavPlayer;
