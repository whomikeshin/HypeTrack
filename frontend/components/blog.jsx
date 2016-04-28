var React = require('react');
var ApiUtil = require('../util/api_util');
var Loader = require('./loader');
var BlogStore = require('../stores/blog');
var TrackIndexItem = require('./track/index_item');

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
            <figure className="profile-image-blog">
              <img src="http://cdn.someoddpilot.com/wp-content/uploads/2012/03/pitchfork1.1.png"/>
            </figure>
          </header>

          <header>
            <h2 className="playlist-title">
              Latest Posts From <a href="#">{blog.name}</a>
            </h2>
            <ul className="playlist-menu alt">
              <li><a href="#">Newest First↓</a></li>
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
