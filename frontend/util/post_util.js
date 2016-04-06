var PostActions = require('../actions/post_actions');

PostUtil = {
  fetchPosts: function () {
    $.ajax({
      type: 'GET',
      url: 'http://hypem.com/playlist/popular/3day/json/1/data.js',
      success: function (posts) {
        PostActions.rececivePosts(posts);
      },
      error: function(data) {
        console.log(data);
      }
    });
  },
};

module.exports = PostUtil;
