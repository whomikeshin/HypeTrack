var React = require('react');
var TrackStore = require('../../stores/track');
var ApiUtil = require('../../util/api_util');
var TrackIndexItem = require('./index_item');
var Loader = require('../loader');
var Link = require('react-router').Link;

function _getAllTracks () {
  return TrackStore.all();
}

var Favorites = React.createClass({
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
    var favTracks;
    var currentUserId = this.props.params.id;

    if (tracks === null) {
      return <Loader />;
    } else {
      favTracks = this._favoriteTracks(tracks);
    }

    return (
      <main className="content">
        <section className="playlist group">

          <header>
            <h2 className="playlist-title">My Favorite Tracks</h2>
            <ul className="playlist-menu">
              <li><Link to={"/users/" + currentUserId + "/feed"}>Feed</Link></li>
              <li className="highlight"><Link to={"/users/" + currentUserId + "/favorites"}>Favorites</Link></li>
              <li><a>Up</a></li>
              <li><a>Down</a></li>
              <li><a>Weird</a></li>
              <li><a>Listening History</a></li>
            </ul>
          </header>

          <ul className="tracks-list">
            {favTracks.map(function (track) {
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

  _favoriteTracks: function (tracks) {
    var userId = parseInt(this.props.params.id);
    var favTracks = [];
    for (var i = 0; i < tracks.length; i++) {
      if (tracks[i].favorite_ids.includes(userId)) {
        favTracks.push(tracks[i])
      }
    };
    return favTracks;
  },

});

module.exports = Favorites;
