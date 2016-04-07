var React = require('react');
var PostStore = require('../stores/post');
var PostUtil = require('../util/post_util');
var Loader = require('./loader');

function _getAllPosts () {
  return PostStore.all();
}

var Post = React.createClass({
  getInitialState: function () {
    return { posts: _getAllPosts() };
  },

  componentDidMount: function () {
    this.onChangeToken = PostStore.addListener(this._onChange);
    PostUtil.fetchPosts();
  },

  componentWillUnmount: function () {
    this.onChangeToken.remove();
  },

  _onChange: function () {
    var posts = _getAllPosts();
    this.setState({ posts: posts });
  },

  render: function () {
    debugger;
    var posts = this.state.posts;
  
    if(!posts) {
      return <Loader/>;
    }

    return (
      <div>{posts}</div>
    );
  }
});

module.exports = Post;
