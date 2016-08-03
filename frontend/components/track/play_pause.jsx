var React = require('react');
var PlayerStore = require('../../stores/player');
var PlayerActions = require('../../actions/player_actions');

var PlayPause = React.createClass({
  // getInitialState: function () {
  //   return {
  //     isPlaying: false,
  //   };
  // },
  //
  // componentDidMount: function () {
  //   this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
  // },
  //
  // componentWillUnmount: function () {
  //   this.onPlayerChangeToken.remove();
  // },

  render: function () {
    var trackButton = this._trackButton();

    return (
      <div className="track-button">
        {trackButton}
      </div>
    );
  },

  // _onPlayerChange: function () {
  //   var track = this.props.track;
  //
  //   if (PlayerStore.isCurrentTrack(track.id)) {
  //     this.setState({ isPlaying: PlayerStore.playStatus() });
  //   } else {
  //     this.setState({ isPlaying: false});
  //   }
  // },

  _toggle: function(e) {
    e.preventDefault();
    var track = this.props.track;
    var isPlaying = this.props.playing & PlayerStore.isPlaying();

    console.log("track: " + track.title + " is: " + isPlaying)

    if (isPlaying) {
      PlayerActions.pause();
    } else {
      PlayerActions.receiveCurrentTrack(track);
      console.log("before PlayerActions.play")
      PlayerActions.play(track.id);
      console.log("after PlayerActions.play")
    }
  },

  _trackButton: function () {
    var isPlaying = this.props.playing;

    if (isPlaying) {
      return (
        <button
          className="pause-button"
          onClick={this._toggle}>
          <i className="fa fa-pause"></i>
        </button>
      );
    } else {
      return (
        <button
          className="play-button"
          onClick={this._toggle}>
          <i className="fa fa-play"></i>
        </button>
      );
    }
  }
});

module.exports = PlayPause;
