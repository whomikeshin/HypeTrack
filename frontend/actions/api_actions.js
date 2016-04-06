var AppDispatcher = require('../dispatcher/dispatcher');
var TrackConstants = require('../constants/track_constants');
var UserConstants = require('../constants/user_constants');

var ApiActions = {
  receiveTracks: function (tracks) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACKS_RECEIVED,
      tracks: tracks
    });
  },

  receiveSingleTrack: function (track) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.SINGLE_TRACK_RECEIVED,
      track: track
    });
  },

  removeTrack: function (track) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACK_REMOVED,
      track: track
    });
  },

  receiveUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  }
};

module.exports = ApiActions;
