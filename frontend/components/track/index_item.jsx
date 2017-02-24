var React = require('react');
var Link = require('react-router').Link;
var ReactRouter = require('react-router');
var SessionStore = require('../../stores/session');
var PlayerStore = require('../../stores/player');
var BlogStore = require('../../stores/blog');
var ApiUtil = require('../../util/api_util');
var PlayPause = require('./play_pause');
var PlayerActions = require('../../actions/player_actions');
var Loader = require('../loader');
var WaveSurfer = require('../wavesurfer');
var FavoriteButton = require('./favorite_button');

function _getAllBlogs () {
  return BlogStore.all();
}

function _getIsCurrentTrack (trackId) {
  return PlayerStore.isCurrentTrack(trackId);
}

function _getCurrentUser () {
  return SessionStore.currentUser();
}

var IndexItem = React.createClass({
  getInitialState: function () {
    return ({
      track: this.props.track,
      playing: _getIsCurrentTrack(this.props.track.id),
      currentUser: _getCurrentUser(),
      blogs: null
    });
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({ track: newProps.track})
  },

  componentDidMount: function () {
    this.onBlogChangeToken = BlogStore.addListener(this._onBlogChange);
    this.onPlayerChangeToken = PlayerStore.addListener(this._onPlayerChange);
    this.onSessionChangeToken = SessionStore.addListener(this._onSessionChange);
    ApiUtil.fetchBlogs();
  },

  componentWillUnmount: function () {
    this.onBlogChangeToken.remove();
    this.onPlayerChangeToken.remove();
  },

  render: function () {
    var blogList,
        followButton,
        track = this.state.track,
        playing = this.state.playing,
        currentUser = this.state.currentUser,
        blogs = this.state.blogs;

    if (blogs) {
      var blogList = this._blogList(blogs);
    } else {
      return <Loader/>;
    }

    return (
      <li className="track group">
        <div className="track-image">
          <img src={track.posts[0].thumb_url}/>
        </div>

        <section className="track-detail-container">
          <div className="track-artist">
            <Link
              to={"/artists/" + track.artist.id}>{track.artist_name}
            </Link>
          </div>
          <div className="track-name">
            {track.title}
          </div>

          <WaveSurfer track={track} type="show" />

          <div className="track-post">
            <div className="track-post-count">
              Posted by {blogList.length} blogs
            </div>
            <div className="track-blog-name">
              <Link
                to={"/blogs/" + blogList[0].id}>
                {blogList[0].name}
              </Link>
              <span className="follow-button">
                {followButton}
              </span>
            </div>
            <p className="track-post-info">
              {track.posts[0].track_info.slice(0, 200).concat("...")}
              <a href={track.posts[0].post_url} className="track-blog">
                Read Post →</a>
            </p>
          </div>

        </section>
        <ul className="fav-div">
          <li><p>{track.favorite_count}</p></li>
          <li><FavoriteButton user={currentUser} track={track}/></li>
          <li><PlayPause playing={playing} track={track}/></li>
        </ul>
      </li>
    );
  },

  _onBlogChange: function () {
    this.setState({ blogs: _getAllBlogs() })
  },

  _onPlayerChange: function () {
    this.setState({ playing: _getIsCurrentTrack(this.props.track.id) })
  },

  _onSessionChange: function () {
    this.setState({ currentUser: _getCurrentUser() })
  },

  _follow: function () {
    var blogList = this._blogList(this.state.blogs);
    var blog = blogList[0];
    var currentUser = SessionStore.currentUser();
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

  _blogList: function (blogs) {
    var track = this.props.track;
    var blogList = [];
    for (var i = 0; i < blogs.length; i++) {
      var blog = blogs[i]
      for (var j = 0; j < blog.tracks.length; j++) {
        if (blog.tracks[j].id === track.id) {
          blogList.push(blogs[i])
        }
      }
    }
    return blogList;
  },

  _followBlog: function (blogId) {
    ApiUtil.createFollow(blogId);
  },

  _unfollowBlog: function (blogId) {
    ApiUtil.destroyFollow(blogId);
  }
});

module.exports = IndexItem;
