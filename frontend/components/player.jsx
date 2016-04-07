var React = require('react');
var ReactDOM = require('react-dom');

var Player = React.createClass({
  getInitialState: function () {
    return {
      audio: this.props.track.audio_file_name,
      isPlaying: false
    };
  },

  componentDidMount: function () {
    var audioDOM = this.refs.audioHTML;
  },

  toggle: function(e) {
    e.preventDefault();
    var audioDOM = this.refs.audioHTML;
    var audio = this.state.audio;
    var isPlaying = this.state.isPlaying;

    this.setState({ isPlaying: !isPlaying });

    if (isPlaying) {
      return audioDOM.pause();
    }
    return audioDOM.play();
  },

  render: function () {
    var trackButton = this._trackButton();
    var audioSource = this.state.audio;

    if(!audioSource) {
      return <Loader/>;
    }
    return (
      <div className="playa playa">
        <audio src={audioSource} ref="audioHTML"></audio>
        {trackButton}
      </div>
    );
  },

  _trackButton: function () {
    var isPlaying = this.state.isPlaying;
    if (isPlaying) {
      return (
        <button
          className="pause-button"
          onClick={this.toggle}>
          &#10074;&#10074;
        </button>
      );
    } else {
      return (
        <button
          className="play-button"
          onClick={this.toggle}>
          &#9658;
        </button>
      );
    }
  }
});

module.exports = Player;
