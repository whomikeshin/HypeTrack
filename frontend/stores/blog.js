var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BlogConstants = require('../constants/blog_constants');
var _blogs = [];

var BlogStore = new Store(AppDispatcher);

var resetBlogs = function (blogs) {
  _blogs = blogs.slice();
};

BlogStore.all = function () {
  return _blogs.slice();
};

BlogStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BlogConstants.BLOGS_RECEIVED:
      resetBlogs(payload.blogs);
      BlogStore.__emitChange();
      break;
    case BlogConstants.SINGLE_BLOG_RECEIVED:
      for (var i = 0; i < _blogs.length; i++ ) {
        if (_blogs[i].id === payload.blog.id) {
          _blogs[i] = payload.blog;
        }
      }
      BlogStore.__emitChange();
      break;
  }
};

BlogStore.find = function (blog_id) {
  return _blogs.find(function (blog) {
    return blog.id === parseInt(blog_id);
  });
};


module.exports = BlogStore;
