var React = require('react');
var ApiUtil = require('../../util/api_util');

var FollowButton = React.createClass({
  // getInitialState: function () {
  //   currentTrack: null
  // },
  //
  // componentWillReceiveProps: function (newProps) {
  //   this.setState({ currentTrack: newProps.track })
  // },

  render: function () {
    var currentUser = this.props.user,
        followButton;

    if (currentUser) {
      followButon = this._follow();
    }

    return (
      <div>
        {followButton}
      </div>
    );
  },

  _follow: function () {
    var blogList = this.props.blogs,
        blog = blogList[0];

    if (blog.follower_ids.includes(currentUser.id)) {
      return (
        <button
          className="unfollow"
          onClick={this._unfollowBlog.bind(this, blog.id)}>
          <div>
            <i className="fa fa-minus"></i>
            <span className="follow-text"> Unfollow</span>
          </div>
        </button>
      );
    } else {
      return (
        <button
          className="follow"
          onClick={this._followBlog.bind(this, blog.id)}>
          <div>
            <i className="fa fa-plus"></i>
            <span className="follow-text"> Follow</span>
          </div>
        </button>
      );
    }
  },

  _followBlog: function (blogId) {
    ApiUtil.createFollow(blogId);
  },

  _unfollowBlog: function (blogId) {
    ApiUtil.destroyFollow(blogId);
  },
});

module.exports = FollowButton;
