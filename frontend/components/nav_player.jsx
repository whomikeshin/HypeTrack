var React = require('react');
var PlayerStore = require('../stores/player');
var TrackStore = require('../stores/track');
var Loader = require('./loader');
var NavControls = require('./nav_controls');

function _getCurrentTrack () {
  return PlayerStore.currentTrack();
}

// function _getAllTracks () {
//   TrackStore.all();
// }

// function _getAllTracks () {
//   var trackHash = PlayerStore.all();
//       trackArr = _hashToArray(trackHash);
//   return trackArr;
// }
//
// function _hashToArray(hash) {
//   var arr = [];
//   for (var key in hash) {
//     arr.push(hash[key]);
//   }
//   return arr;
// }

function _isPlaying () {
  return PlayerStore.playStatus();
}

var NavPlayer = React.createClass({

  getInitialState: function () {
    return {
      currentTrack: null,
      // tracks: _getAllTracks(),
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
    // var tracks = this.state.tracks;
    var track = this.state.currentTrack;
    var playStatus = this.state.playStatus;

    if (!track) {
      return <Loader/>;
    }
    return (
      <div>
        <div>
          <audio src={track.audio_file_name}>
          </audio>
        </div>

        <ul id="current-track">
          <li>{track.title}</li>
          <li>-</li>
          <li>{track.artist_name}</li>
          <li><a href={track.posts[0].post_url}>
            <small>Read Post →</small></a></li>
        </ul>
      </div>
    );
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
