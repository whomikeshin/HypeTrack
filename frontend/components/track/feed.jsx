var React = require('react');
var TrackStore = require('../../stores/track');
var UserStore = require('../../stores/user');
var ApiUtil = require('../../util/api_util');
var TrackIndexItem = require('./index_item');
var Loader = require('../loader');
var Link = require('react-router').Link;


function _getAllTracks () {
  return TrackStore.all();
}

var Feed = React.createClass({
  getInitialState: function () {
    return { tracks: null };
  },

  componentDidMount: function () {
    this.onChangeToken = TrackStore.addListener(this._onChange);
    ApiUtil.fetchUserTracks(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.onChangeToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ tracks: null });

    ApiUtil.fetchUserTracks(newProps.params.id);
  },

  render: function () {
    var tracks = this.state.tracks;
    var feedTracks;
    var currentUserId = this.props.params.id;

    if (tracks === null) {
      return <Loader />;
    } else {
      feedTracks = this._feedTracks(tracks);
    }

    return (
      <main className="content">
        <section className="playlist group">

          <header>
            <h2 className="playlist-title">My Feed</h2>
            <ul className="playlist-menu">
              <li className="highlight"><Link to={"/users/" + currentUserId + "/feed"}>Feed</Link></li>
              <li><Link to={"/users/" + currentUserId + "/favorites"}>Favorites</Link></li>
              <li><a>Up</a></li>
              <li><a>Down</a></li>
              <li><a>Weird</a></li>
              <li><a>Listening History</a></li>
            </ul>
          </header>

          <ul className="tracks-list">
            {feedTracks.map(function (track) {
              return <TrackIndexItem key={track.id} track={track} />;
            })}
          </ul>

        </section>
      </main>
    );
  },

  _onChange: function () {
    var tracks = _getAllTracks();
    this.setState({ tracks: tracks });
  },

  _feedTracks: function (tracks) {
    var userId = parseInt(this.props.params.id);
    var user = UserStore.find(userId);
    var blogFollows = user.blog_follows;
    var blogTracks = [];

    for (var i = 0; i < blogFollows.length; i++) {
      var blog = blogFollows[i];
      for (var j = 0; j < blog.tracks.length; j++) {
        blogTracks.push(blog.tracks[j])
      }
    };

    return blogTracks;
  },

});

module.exports = Feed;
