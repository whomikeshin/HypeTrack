var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/post_constants');
var _posts = [];

var PostStore = new Store(AppDispatcher);

var resetPosts = function (posts) {
  debugger;
  for (var i = 0; i < Object.keys(posts).length - 1; i++) {
    _posts[i] = posts[i];
  }
};

PostStore.all = function () {
  return _posts.slice();
};

PostStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PostConstants.POSTS_RECEIVED:
      resetPosts(payload.posts);
      PostStore.__emitChange();
      break;
  }
};

module.exports = PostStore;
