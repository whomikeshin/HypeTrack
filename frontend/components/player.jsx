var React = require('react');
var PlayerStore = require('../stores/player');
var PlayerActions = require('../actions/player_actions');

var Player = React.createClass({
  getInitialState: function () {
    return {
      // track: this.props.track,
      isPlaying: false,
    };
  },

  componentDidMount: function () {
    // var audioDOM = this.refs.audioHTML;
    this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
  },

  componentWillUnmount: function () {
    this.onPlayerChangeToken.remove();
  },

  render: function () {
    var trackButton = this._trackButton();

    return (
      <div className="track-button">
        {trackButton}
      </div>
    );
  },

  _onPlayerChange: function () {
    var track = this.props.track;
    currentTrack = PlayerStore.currentTrack();
    if (track.id === currentTrack.id) {
      this.setState({ isPlaying: PlayerStore.playStatus() });
    }
  },

  _toggle: function(e) {
    e.preventDefault();
    // var audioDOM = this.refs.audioHTML;
    // var audio = this.state.audio;
    var isPlaying = this.state.isPlaying;

    this.setState({ isPlaying: !isPlaying });

    if (isPlaying) {
      PlayerActions.pause();
      // return audioDOM.pause();
    }
      PlayerActions.receiveCurrentTrack(this.props.track);
      PlayerActions.play();
    // return audioDOM.play();
  },

  _trackButton: function () {
    var isPlaying = this.state.isPlaying;
    if (isPlaying) {
      return (
        <button
          className="pause-button"
          onClick={this._toggle}>
          &#10074;&#10074;
        </button>
      );
    } else {
      return (
        <button
          className="play-button"
          onClick={this._toggle}>
          &#9658;
        </button>
      );
    }
  }
});

module.exports = Player;

// getInitialState: function () {
//   return {
//     audio: this.props.track.audio_file_name,
//     isPlaying: false,
//   };
// },


// render: function () {
//   var trackButton = this._trackButton();
//   var audioSource = this.state.audio;
//
//   if(!audioSource) {
//     return <Loader/>;
//   }
//   return (
//     <div className="playa playa">
//       <audio src={audioSource} ref="audioHTML"></audio>
//       {trackButton}
//     </div>
//   );
// },

// <audio src={this.props.track.audio_file_name} ref="audioHTML"></audio>
