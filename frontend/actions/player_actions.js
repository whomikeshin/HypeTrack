var AppDispatcher = require('../dispatcher/dispatcher');
var PlayerConstants = require('../constants/player_constants');

var PlayerActions = {
  receiveWavesurfer: function (track) {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.WAVE_RECEIVED,
      track: track
    });
  },

  remountWavesurfer: function (trackId, container, height, visible) {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.WAVE_REMOUNTED,
      trackId: trackId,
      container: container,
      height: height,
      visible: visible
    });
  },

  unmountWavesurfer: function (trackId) {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.WAVE_UNMOUNTED,
      trackId: trackId
    });
  },

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

  next: function () {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.NEXT
    });
  },

  prev: function () {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.PREV
    });
  },

  reset: function () {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.RESET
    });
  },
};

module.exports = PlayerActions;
