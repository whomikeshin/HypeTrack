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

  createFavorite: function (trackId, success) {
    $.ajax({
      type: 'POST',
      url: 'api/tracks/' + trackId + '/favorite',
      success: function (track) {
        ApiActions.receiveSingleTrack(track);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  destroyFavorite: function (trackId, success) {
    $.ajax({
      type: 'DELETE',
      url: 'api/tracks/' + trackId + '/favorite',
      success: function (track) {
        ApiActions.receiveSingleTrack(track);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  createFollow: function (blogId, success) {
    $.ajax({
      url: "api/blogs/" + blogId + "/follow",
      method: 'POST',
      success: function (blog) {
        ApiActions.receiveSingleBlog(blog);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  destroyFollow: function (blogId, success) {
    $.ajax({
      url: "/api/blogs/" + blogId + "/follow",
      method: 'DELETE',
      success: function (blog) {
        ApiActions.receiveSingleBlog(blog);
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
      url: 'api/users/' + user_id,
      success: function (user) {
        ApiActions.receiveUsers([user]);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  fetchUserTracks: function (userId) {
    $.ajax({
      url: "api/users/" + userId + "/tracks",
      success: function (tracks) {
        ApiActions.receiveTracks(tracks);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  fetchArtist: function (artist_id) {
    $.ajax({
      type: 'GET',
      url: 'api/artists/' + artist_id,
      success: function (artist) {
        ApiActions.receiveArtists([artist]);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  fetchBlog: function (blog_id) {
    $.ajax({
      type: 'GET',
      url: 'api/blogs/' + blog_id,
      success: function (blog) {
        ApiActions.receiveBlogs([blog]);
      },
      error: function (data) {
        console.log(data);
      }
    });
  },
};

module.exports = ApiUtil;
