var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var TrackConstants = require('../constants/track_constants');
var _tracks = [];
var TrackStore = new Store(AppDispatcher);

TrackStore.all = function () {
  return _tracks.slice(0);
};

TrackStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case TrackConstants.TRACKS_RECEIVED:
      var result = resetTracks(payload.tracks);
      TrackStore.__emitChange();
      break;
  }
};

module.exports = TrackStore;
