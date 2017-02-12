var React = require('react');
var PlayerStore = require('../../stores/player');
var PlayerActions = require('../../actions/player_actions');

var PlayPause = React.createClass({
  // getInitialState: function () {
  //   return {
  //     isPlaying: this.props.playing
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

  // _toggle: function(e) {
  //   e.preventDefault();
  //   var track = this.props.track;
  //   var isPlaying = this.state.isPlaying && PlayerStore.isPlaying();
  //
  //   if (isPlaying) {
  //     PlayerActions.pause();
  //   } else {
  //     PlayerActions.receiveCurrentTrack(track);
  //     PlayerActions.play(track.id);
  //   }
  // },
  //
  // _onPlayerChange: function () {
  //   this.setState({
  //     isPlaying: this.props.playing
  //   })
  // },

  _trackButton: function () {
    var isPlaying = this.props.playing && PlayerStore.isPlaying();

    if (isPlaying) {
      return (
        <button
          id="pause-button"
          onClick={this._pauseTrack}>
          <i className="fa fa-pause"></i>
        </button>
      );
    } else {
      return (
        <button
          id="play-button"
          onClick={this._playTrack.bind(null, this.props.track)}>
          <i className="fa fa-play"></i>
        </button>
      );
    }
  },

  _playTrack: function (track) {
    PlayerActions.play(track.id);
  },

  _pauseTrack: function () {
    PlayerActions.pause();
  },
});

module.exports = PlayPause;
