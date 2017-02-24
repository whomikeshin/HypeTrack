var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var TrackConstants = require('../constants/track_constants');

var _tracks = [];
var TrackStore = new Store(AppDispatcher);

var reset = function (tracks) {
  _tracks = tracks.slice();
};

TrackStore.all = function () {
  return _tracks;
};

TrackStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case TrackConstants.TRACKS_RECEIVED:
      reset(payload.tracks);
      TrackStore.__emitChange();
      break;
    case TrackConstants.SINGLE_TRACK_RECEIVED:
      for (var i = 0; i < _tracks.length; i++ ) {
        if (_tracks[i].id === payload.track.id) {
          _tracks[i] = payload.track;
        }
      }
      TrackStore.__emitChange();
      break;
  }
};

module.exports = TrackStore;
