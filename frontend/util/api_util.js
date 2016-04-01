var ApiActions = require('../actions/api_actions');
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session');

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

  login: function (credentials, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/session',
      data: credentials,
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
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
  }
};

module.exports = ApiUtil;
