var React = require('react');
var PlayerStore = require('../../stores/player');
var PlayerActions = require('../../actions/player_actions');

var PlayPause = React.createClass({
  getInitialState: function () {
    return {
      isPlaying: false,
    };
  },

  componentDidMount: function () {
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
    } else {
      this.setState({ isPlaying: false});
    }
  },

  _toggle: function(e) {
    e.preventDefault();
    var isPlaying = this.state.isPlaying;

    if (isPlaying) {
      PlayerActions.pause();
    } else {
      PlayerActions.receiveCurrentTrack(this.props.track);
      PlayerActions.play();
    }
  },

  _trackButton: function () {
    var isPlaying = this.state.isPlaying;
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
