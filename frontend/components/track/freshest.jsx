var React = require('react');
var TrackStore = require('../../stores/track');
var ApiUtil = require('../../util/api_util');
var TrackIndexItem = require('./index_item');

function _getAllTracks () {
  return TrackStore.all();
}

var Freshest = React.createClass({
  getInitialState: function () {
    return {
      tracks: _getAllTracks()
    };
  },

  componentDidMount: function () {
    this.onTrackChangeToken = TrackStore.addListener(this._onTrackChange);
    ApiUtil.fetchTracks();
  },

  componentWillUnmount: function () {
    this.onTrackChangeToken.remove();
  },

  _onTrackChange: function () {
    var tracks = _getAllTracks();
    this.setState({ tracks: tracks });
  },

  render: function () {
    var tracks = this.state.tracks;

    tracks = tracks.filter(function(track) {
      return track.blogs.length == 1;
    });

    tracks.sort(function(a, b) {
      return b.created_at - a.created_at;
    });

    return (
      <main className="content">
        <section className="playlist group">

          <header>
            <h2 className="playlist-title">The Freshest Blogged Music</h2>
            <ul className="playlist-menu">
              <li><a href="#">All</a></li>
              <li className="highlight"><a>Freshest</a></li>
              <li><a href="#/remix">Only Remixes</a></li>
              <li><a href="#/noremix">No Remixes</a></li>
            </ul>
          </header>

          <ul className="tracks-list">
            {tracks.map(function (track) {
              return <TrackIndexItem key={track.id} track={track}/>;
            })}
          </ul>
        </section>
      </main>
    );
  },

});

module.exports = Freshest;
