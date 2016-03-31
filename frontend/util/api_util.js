var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchTracks: function () {
    $.ajax({
      type: 'get',
      url: 'api/tracks',
      success: function (tracks) {
        ApiActions.receiveTracks(tracks);
      },
      error: function(data) {
        console.log(data);
      }
    });
  }
};

module.exports = ApiUtil;
