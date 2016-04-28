var React = require('react');
var UserStore = require('../../stores/user');
var SessionStore = require('../../stores/session');
var TrackIndexItem = require('../track/index_item');
var TrackStore = require('../../stores/track');
var ApiUtil = require('../../util/api_util');
var Loader = require('../loader');

var Profile = React.createClass({

  getInitialState: function () {
    return { user: null };
  },

  componentDidMount: function () {
    this.onChangeToken = UserStore.addListener(this._onChange);
    this.onTrackChangeToken = TrackStore.addListener(this._onTrackChange);
    ApiUtil.fetchUser(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.onChangeToken.remove();
    this.onTrackChangeToken.remove();
  },

  _onChange: function () {
    this.setState({ user: UserStore.find(this.props.params.id) });
  },

  _onTrackChange: function () {
    this.forceUpdate();
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ user: UserStore.find(newProps.params.id) });
  },

  render: function () {
    debugger;
    var user = this.state.user;

    if(!user) {
      return <Loader/>;
    }

    return (
      <main className="content">
        <section className="playlist group">
          <header className="profile-header group">
            <figure className="profile-image">
              <img src={user.thumb_url}/>
            </figure>
            <h1 className="profile-name">{user.username}</h1>
            <h2><small>Joined on April 12, 2016</small></h2>

            <ul className="profile-menu">
              <li>
                0
                <p className="blog-text">Friends</p>
              </li>
              <li>
                {user.blog_follows.length}
                <p className="blog-text">Blogs</p>
              </li>
              <li>
                {user.favorite_tracks.length}
                <p className="blog-text">Favorites</p>
              </li>
            </ul>

          </header>

          <header>
            <h2 className="playlist-title">My Favorite Tracks</h2>
            <ul className="playlist-menu">
              <li><a href="#">Feed</a></li>
              <li><a href="#">Favorites</a></li>
              <li><a href="#">Up</a></li>
              <li><a href="#">Down</a></li>
              <li><a href="#">Weird</a></li>
              <li><a href="#">Listening History</a></li>
            </ul>
          </header>
          <ul className="tracks-list">
            {user.favorite_tracks.map(function (track) {
              return <TrackIndexItem key={track.id} track={track} />;
            })}
          </ul>
        </section>
      </main>
    );
  },
});

module.exports = Profile;
