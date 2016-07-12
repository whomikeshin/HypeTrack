var React = require('react');
var Loader = require('./loader');

var Wavesurfer = React.createClass({
  
  render: function () {
    var track = this.props;
    console.log(track);
    return (
      <div id="waveform"></div>
    );
  }
});

module.exports = Wavesurfer;
