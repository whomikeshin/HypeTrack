var React = require('react');
var PlayerStore = require('../stores/player');
// var PlayerActions = require('../actions/player_actions');
var Loader = require('./loader');
var TrackStore = require('../stores/track');
var NavControls = require('./nav_controls');

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
    // var audioTags = document.getElementsByTagName('audio');
    // var audioDOM = this.refs.audioHTML;
    this.onTrackChangeToken = TrackStore.addListener(this._onTrackChange);
    this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
    // ApiUtil.fetchTracks();
  },

  componentWillUnmount: function () {
    this.onPlayerChangeToken.remove();
    this.onTrackChangeToken.remove();
  },

  render: function () {
    var i = 0;
    var track = this.state.currentTrack;
    var loadedTracks = this.state.loadedTracks;
    var playStatus = this.state.playStatus;

    if (!track) {
      return <NavControls/>;
    } else {
      return (
      <div>
        <div>
          <audio src={track.audio_file_name} controls autoplay>
          </audio>
        </div>

        <div className="current-track">
          {track.title} - {track.artist_name}
        </div>
      </div>
      );
    }
  },

  _onTrackChange: function () {

    var loadedTracks = _getAllTracks();
    this.setState({ loadedTracks: loadedTracks });
  },

  _onPlayerChange: function () {
    // var audioDOM = this.refs.audioHTML;
    var currentTrack = _getCurrentTrack();
    var loadedTracks = _getAllTracks();
    var playStatus = _isPlaying();

    this.setState({
      currentTrack: currentTrack,
      loadedTracks: loadedTracks,
      playStatus: playStatus
    });

    // var audio = document.getElementsByTagName('audio');
    // if (this.state.playStatus) {
    //   audio[0].play();
    // } else {
    //   audio[0].pause();
    // }
  }
});


module.exports = NavPlayer;

// if (track) {
//   return (
//     <audio src={track.audio_file_name} className="current" controls>
//     </audio>
//   );
// }

// render: function () {
//   var track = this.state.currentTrack;
//
//   if(!track) {
//     return <Loader/>;
//   }
//   return (
//     <audio src={track.audio_file_name} ref="audioHTML" controls>
//     </audio>
//   );
// },
