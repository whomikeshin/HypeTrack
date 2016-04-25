var React = require('react');
var PlayerStore = require('../stores/player');


function _isPlaying () {
  return PlayerStore.playStatus();
}

var NavControls = React.createClass({
  getInitialState: function () {
    return {
      playStatus: _isPlaying()
    };
  },

  componentDidMount: function () {
    this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
  },

  componentWillUnmount: function () {
    this.onPlayerChangeToken.remove();
  },

  render: function () {
    return (
      <ul className="nav-controls">
        <li><i className="fa fa-fast-backward"></i></li>
        <li><i className="fa fa-play"></i></li>
        <li><i className="fa fa-heart"></i></li>
        <li><i className="fa fa-fast-forward"></i></li>
      </ul>
    );
  },

  _onPlayerChange: function () {
    audio = document.getElementsByTagName('audio');
    this.setState({
      playStatus: _isPlaying()
    });

    //Player Store lags behind
    if (!this.state.playStatus) {
      audio[0].play();
    } else {
      audio[0].pause();
    }
  }
});


module.exports = NavControls;
