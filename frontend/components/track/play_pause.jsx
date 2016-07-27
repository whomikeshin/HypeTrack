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

    if (PlayerStore.isCurrentTrack(track.id)) {
      this.setState({ isPlaying: PlayerStore.playStatus() });
    } else {
      this.setState({ isPlaying: false});
    }
  },

  _toggle: function(e) {
    e.preventDefault();
    var track = this.props.track;
    var isPlaying = this.state.isPlaying;

    if (isPlaying) {
      PlayerActions.pause();
    } else {
      PlayerActions.receiveCurrentTrack(track);
      PlayerActions.play(track.id);
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
