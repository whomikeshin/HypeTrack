var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var TrackConstants = require('../constants/track_constants');
var _tracks = [];

var TrackStore = new Store(AppDispatcher);

var resetTracks = function (tracks) {
  _tracks = tracks.slice();
};

TrackStore.all = function () {
  return _tracks.slice();
};

TrackStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case TrackConstants.TRACKS_RECEIVED:
      resetTracks(payload.tracks);
      TrackStore.__emitChange();
      break;
    case TrackConstants.SINGLE_TRACK_RECEIVED:
      _tracks[payload.track.id] = payload.track;
      TrackStore.__emitChange();
      break;
  }
};

module.exports = TrackStore;
