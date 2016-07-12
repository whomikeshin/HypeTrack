var React = require('react');
var PlayerStore = require('../stores/player');
var Loader = require('./loader');
var TrackStore = require('../stores/track');
var NavControls = require('./nav_controls');
var Timebar = require('./nav_timebar');

function _getCurrentTrack () {
  return PlayerStore.currentTrack();
}

function _getAllTracks () {
  return TrackStore.all();
}

function _isPlaying () {
  return PlayerStore.playStatus();
}

var NavPlayer = React.createClass({

  getInitialState: function () {
    return {
      currentTrack: null,
      loadedTracks: _getAllTracks(),
      playStatus: _isPlaying()
    };
  },

  componentDidMount: function () {
    this.onTrackChangeToken = TrackStore.addListener(this._onTrackChange);
    this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
    console.log("mounted");
  },

  componentWillUnmount: function () {
    this.onPlayerChangeToken.remove();
    this.onTrackChangeToken.remove();
  },

  render: function () {
    var loadedTracks = this.state.loadedTracks;
    var track = this.state.currentTrack || loadedTracks[0];
    var playStatus = this.state.playStatus;
    console.log(loadedTracks);
    console.log(track);

    if (!track) {
      return <Loader/>;
    } else {
      return (
      <div>
        <div>
          <audio src={track.audio_file_name}>
          </audio>
        </div>

        <div className="current-track">
          {track.title} - {track.artist_name + " "}
          <a href={track.posts[0].post_url}><small>Read Post →</small></a>
        </div>
        <Timebar track={track} playing={playStatus}/>
      </div>
      );
    }
  },

  _onTrackChange: function () {
    var loadedTracks = _getAllTracks();
    this.setState({ loadedTracks: loadedTracks });
  },

  _onPlayerChange: function () {
    var currentTrack = _getCurrentTrack();
    var loadedTracks = _getAllTracks();
    var playStatus = _isPlaying();

    this.setState({
      currentTrack: currentTrack,
      loadedTracks: loadedTracks,
      playStatus: playStatus
    });
  }
});


module.exports = NavPlayer;
