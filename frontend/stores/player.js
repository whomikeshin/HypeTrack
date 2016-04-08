var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PlayerConstants = require('../constants/player_constants');

var _currentTrack;
var _playStatus;
var _loadedTracks = [];

var PlayerStore = new Store(AppDispatcher);

PlayerStore.addTrack = function (track) {
  _loadedTracks.push(track);
};

PlayerStore.all = function () {
  return _loadedTracks.slice();
};

PlayerStore.currentTrack = function () {
  return _currentTrack;
};

PlayerStore.playStatus = function () {
  return _playStatus;
};

PlayerStore.__onDispatch = function (payload) {
  debugger
  switch(payload.actionType) {
    case PlayerConstants.CURRENT_TRACK_RECEIVED:
      _currentTrack = payload.track;
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.PLAYED:
      _playStatus = true;
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.PAUSED:
      _playStatus = false;
      PlayerStore.__emitChange();
      break;
    case PlayerConstants.ADD:
      addTrack(payload.track);
      PlayerStore.__emitChange();
      break;
  }
};

module.exports = PlayerStore;
