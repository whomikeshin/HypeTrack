var React = require('react');
var PlayerStore = require('../stores/player');
var PlayerActions = require('../actions/player_actions');

var Wavesurfer = React.createClass({
  componentDidMount: function () {
    this._initWavesurfer();
    this.loaded = false;
  },

  componentWillUnmount: function () {
    setTimeout(function () {
      PlayerActions.unmountWavesurfer(this.props.track.id);
    }.bind(this), 0);
  },

  render: function () {
    var type = this.props.type;

    return <div className={ type + " wave-" + this.props.track.id }></div>;
  },

  _initWavesurfer: function () {
    var track = this.props.track,
        type = this.props.type,
        height = 128;
        visible = true;

    if (type === "show") {
      height = 200;
    }

    if (type === "hide") {
      visible = false;
    }

    var containerClass = "wave-" + track.id;
    var container = $("." + containerClass[0]);

    if (PlayerStore.wavesurferExists(track.id)) {
      setTimeout(function () {
        PlayerActions.remountWavesurfer(
          track.id,
          container,
          height,
          visible
        );
      }.bind(this), 0);
      return;
    }

    this.wavesurfer = Object.create(WaveSurfer);

    console.log("before init")
    this.wavesurfer.init({
      container: container,
      height: height,
      visible: visible
    });
    console.log("the rabbit hole")

    this.wavesurfer.load(track.audio_file_name);

    setTimeout(function () {
      PlayerActions.receiveWavesurfer({
        trackInfo: track,
        wavesurfer: this.wavesurfer
      });

      this.wavesurfer.on('audioprocess', function () {
        PlayerActions.progress();
      });

      this.wavesurfer.on('finish', function () {
        this.wavesurfer.seekTo(0);
        PlayerActions.playNext();
      }.bind(this));

    }.bind(this), 0);
  }
});

module.exports = Wavesurfer;
