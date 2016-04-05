var ApiActions = require('../actions/api_actions');
var SessionActions = require('../actions/session_actions');

ApiUtil = {
  fetchTracks: function () {
    $.ajax({
      type: 'GET',
      url: 'api/tracks',
      success: function (tracks) {
        ApiActions.receiveTracks(tracks);
      },
      error: function(data) {
        console.log(data);
      }
    });
  },

  createTrack: function (formData, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/tracks',
      processData: false,
      contentType: false,
      data: formData,
      success: function (track) {
        ApiActions.receiveSingleTrack(track);
        callback && callback();
      },
      error: function(data) {
        console.log(data);
      },
    });
  },

  createFavorite: function (track_id, success) {
    $.ajax({
      type: 'POST',
      url: 'api/tracks/' + track_id + '/favorite',
      success: function (track) {
        ApiActions.receiveSingleTrack(track);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  destroyFavorite: function (track_id, success) {
    $.ajax({
      type: 'DELETE',
      url: 'api/tracks/' + track_id + '/favorite',
      success: function (track) {
        ApiActions.receiveSingleTrack(track);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  login: function (credentials, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: credentials,
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      complete: function () {
        callback && callback();
      }
    });
  },

  logout: function () {
    $.ajax({
      type: 'DELETE',
      url: 'api/session',
      success: function (currentUser) {
        SessionActions.logout();
      }
    });
  },

  fetchCurrentUser: function (completion) {
    $.ajax({
      type: 'GET',
      url: 'api/session',
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      complete: function () {
        completion && completion();
      }
    });
  },

  createUser: function (formData, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/users',
      data: { user: formData },
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  fetchUser: function (user_id) {
    $.ajax({
      type: 'GET',
      url: 'api/user' + user_id,
      success: function (user) {
        ApiActions.receiveUsers([user]);
      },
      error: function (data) {
        console.log(data);
      }
    });
  }
};

module.exports = ApiUtil;
