var AppDispatcher = require('../dispatcher/dispatcher');
var PlayerConstants = require('../constants/player_constants');

var PlayerActions = {
  receiveCurrentTrack: function (track) {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.CURRENT_TRACK_RECEIVED,
      track: track
    });
  },

  play: function () {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.PLAYED,
    });
  },

  pause: function () {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.PAUSED,
    });
  },

  add: function (track) {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.ADD,
    });
  }
};

module.exports = PlayerActions;
