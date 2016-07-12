var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PlayerConstants = require('../constants/player_constants');
var TrackStore = require('./track');
var Cache = require('../lib/cache');

var _currentTrack;
var _playStatus = false;
//changed from an array
var _loadedTracks = {};
var _trackCache = new Cache(20);

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

PlayerStore.wavesurferExists = function (trackId) {
  return !!_loadedTracks(trackId) || _trackCache.includes(trackId);
};

PlayerStore.__onDispatch = function (payload) {
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
