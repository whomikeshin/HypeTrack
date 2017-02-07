var React = require('react');
var PlayerStore = require('../stores/player');
var SessionStore = require('../stores/session');
var TrackStore = require('../stores/track');
var PlayerActions = require('../actions/player_actions');

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
    var currentUser = SessionStore.currentUser();

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
    this.setState({
      playStatus: _isPlaying(),
    });
  }
});


module.exports = NavControls;
