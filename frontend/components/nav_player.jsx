var React = require('react');
var PlayerStore = require('../stores/player');
var PlayerActions = require('../actions/player_actions');
var Loader = require('./loader');
var TrackStore = require('../stores/track');

var audioTags = [];

function _getLoadedTracks () {
  return PlayerStore.all();
}

var NavPlayer = React.createClass({

  getInitialState: function () {
    return {
      currentTrack: null,
      loadedTracks: _getLoadedTracks()
    };
  },

  componentDidMount: function () {
    // var audioTags = document.getElementsByTagName('audio');
    // this.onTrackChangeToken = TrackStore.addListener(this._onTrackChange);
    this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
  },

  componentWillUnmount: function () {
    this.onPlayerChangeToken.remove();
  },

  render: function () {
    var i = 0;
    var track = this.state.currentTrack;
    debugger
    var loadedTracks = _getLoadedTracks ();
    if (track) {
      return (
        <audio src={track.audio_file_name} ref="audioHTML" controls>
        </audio>
      );
    }

    if (loadedTracks.length === 0) {
      return <Loader/>;
    } else {
      return (
        <audio src={loadedTracks[i].audio_file_name} ref="audioHTML" controls>
        </audio>
      );
    }
  },

  // _onTrackChange: function () {
  //   debugger
  //   var audioTags = document.getElementsByTagName('audio');
  // },

  _onPlayerChange: function () {
    debugger;
    var audioDOM = this.refs.audioHTML;

    var loadedTracks = _getLoadedTracks();
    this.setState({
      currentTrack: PlayerStore.currentTrack(),
      loadedTracks: loadedTracks
    });

    var isPlaying = PlayerStore.playStatus();

    if (isPlaying) {
      audioDOM.play();
    }
    // else {
    //   return audioDOM.paused();
    // }
  },
});

module.exports = NavPlayer;

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
