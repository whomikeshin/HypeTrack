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

TrackStore.next = function(currentTrackId) {
  var prevTrack = _tracks.find(function (track) {
    return track.id === currentTrackId;
  });

  var index = -1;
  if (prevTrack) {
    index = _tracks.indexOf(prevTrack);
  }

  index += 1;
  if (index === _tracks.length) {
    index = 0;
  }

  return _tracks[index];
};

TrackStore.prev = function (currentTrackId) {
  var prevTrack = _tracks.find(function (track) {
    return track.id === currentTrackId;
  });

  var index = _tracks.length;
  if (prevTrack) {
    index = _tracks.indexOf(prevTrack);
  }

  index -= 1;
  if (index === -1) {
    index += _tracks.length;
  }

  return _tracks[index];
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
