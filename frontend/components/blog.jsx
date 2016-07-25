var React = require('react');
var ApiUtil = require('../util/api_util');
var Loader = require('./loader');
var BlogStore = require('../stores/blog');
var TrackIndexItem = require('./track/index_item');
var Link = require('react-router').Link;

var Blog = React.createClass({

  getInitialState: function () {
    return { blog: null };
  },

  componentDidMount: function () {
    this.onChangeToken = BlogStore.addListener(this._onChange);
    ApiUtil.fetchBlog(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.onChangeToken.remove();
  },

  _onChange: function () {
    this.setState({ blog: BlogStore.find(this.props.params.id) });
  },

  render: function () {
    var blog = this.state.blog;

    if(!blog) {
      return <Loader/>;
    }

    return(
      <main className="content">
        <section className="playlist group">
          <header className="profile-header group">
            <figure className="profile-image blog">
              <img src={blog.thumb_url}/>
            </figure>
            <ul className="blog-menu">

              <li>
                <i className="fa fa-plus"></i>
                <p className="blog-text">Follow</p>
              </li>

              <li>
                {blog.track_count}
                <p className="blog-text">Tracks</p>
              </li>

              <li>
                {blog.follower_count}
                <p className="blog-text">Followers</p>
              </li>

              <li>
                <a 
                  href={blog.twitter_url}>
                  <img className="twitter" src="https://g.twimg.com/Twitter_logo_blue.png"/>
                </a>
                <p className="blog-text">Twitter</p>
              </li>


            </ul>
          </header>

          <header>
            <h2 className="playlist-title blog">
              Latest Posts From <a href={blog.url} className="blog-url">{blog.name}</a>
            </h2>
            <ul className="playlist-menu alt">
              <li><a>Newest First↓</a></li>
            </ul>
          </header>
          <ul className="tracks-list">
            {blog.tracks.map(function (track) {
              return <TrackIndexItem key={track.id} track={track} />;
            })}
          </ul>
        </section>
      </main>
    );
  }
});

module.exports = Blog;
