var React = require('react');
var PlayerStore = require('../stores/player');
var Loader = require('./loader');
var NavControls = require('./nav_controls');

function _getCurrentTrack () {
  return PlayerStore.currentTrack();
}

function _getLoadedTracks () {
  return PlayerStore.getLoadedTracks();
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

  componentDidMount: function () {
    this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
  },

  componentWillUnmount: function () {
    this.onPlayerChangeToken.remove();
  },

  render: function () {
    var loadedTracks = this.state.loadedTracks;
    var track = this.state.currentTrack || loadedTracks[parseInt(Object.keys(loadedTracks)[0])];
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

        <div className="current-track">
          {track.trackInfo.title} - {track.trackInfo.artist_name + " "}
          <a href={track.trackInfo.posts[0].post_url}><small>Read Post →</small></a>
        </div>
      </div>
      );
    }
  },

  // _onTrackChange: function () {
  //   var loadedTracks = _getAllTracks();
  //   this.setState({ loadedTracks: loadedTracks });
  // },

  _onPlayerChange: function () {
    var currentTrack = _getCurrentTrack();
    var loadedTracks = _getLoadedTracks();
    var playStatus = _isPlaying();

    this.setState({
      currentTrack: currentTrack,
      loadedTracks: loadedTracks,
      playStatus: playStatus
    });
  },
});


module.exports = NavPlayer;
