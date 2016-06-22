var React = require('react');
var PlayerStore = require('../stores/player');
var SessionStore = require('../stores/session');
var TrackStore = require('../stores/track');
var PlayerActions = require('../actions/player_actions');

function _isPlaying () {
  return PlayerStore.playStatus();
}

function _findTrackIdx () {
  var tracks = TrackStore.all();
  var current = PlayerStore.currentTrack();

  for (var i = 0; i < tracks.length; i++) {
    if (tracks[i] === current) {
      return i;
    }
  }
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
    var favoriteButton = <i className="fa fa-heart"></i>;
    var currentUser = SessionStore.currentUser();

    // if (currentUser) {
    //   favoriteButton = this._favorite();
    // }

    return (
      <ul className="nav-controls">
        <li><i className="fa fa-fast-backward"></i></li>
        <li><i className="fa fa-play"></i></li>
        <li>{favoriteButton}</li>
        <li><i className="fa fa-fast-forward"></i></li>
      </ul>
    );
  },

  _changeTrack: function (change) {
    var currentIdx = _findTrackIdx();
    var tracks = TrackStore.all();

    var updateTrack = tracks[currentIdx + change]

    PlayerActions.receiveCurrentTrack(updateTrack);
    PlayerActions.play();
  },

  _forward: function () {
    return (
      <button
        className="forward"
        onClick={this._changeTrack(1)}>
        <div><i className="fa fa-fast-forward"></i></div>
      </button>
    );
  },

  // _backward: function () {
  //   return (
  //     <button
  //       className="backward"
  //       onClick={this._changeTrack()}>
  //       <div><i className="fa fa-fast-backward"></i></div>
  //     </button>
  //   );
  // },


  // _favorite: function () {
  //   var track = PlayerStore.currentTrack();
  //   //track is undefined
  //   var currentUser = SessionStore.currentUser();
  //
  //   if (track.favorite_ids.includes(currentUser.id)) {
  //     return (
  //       <button
  //         className="unfavorite"
  //         onClick={this._unfavorTrack.bind(this, track.id)}>
  //         <div><i className="fa fa-heart"></i></div>
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <button
  //         className="favorite"
  //         onClick={this._favorTrack.bind(this, track.id)}>
  //         <div><i className="fa fa-heart"></i></div>
  //       </button>
  //     );
  //   }
  // },

  _favorTrack: function (trackId) {
    ApiUtil.createFavorite(trackId);
  },

  _unfavorTrack: function (trackId) {
    ApiUtil.destroyFavorite(trackId);
  },

  _onPlayerChange: function () {
    audio = document.getElementsByTagName('audio');
    this.setState({
      playStatus: _isPlaying(),
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
