var React = require('react');
var TrackStore = require('../../stores/track');
var ApiUtil = require('../../util/api_util');
var TrackIndexItem = require('./index_item');

function _getAllTracks () {
  return TrackStore.all();
}

var Popular = React.createClass({
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

    tracks.sort(function(a, b) {
      return b.favorite_count - a.favorite_count;
    });

    return (
      <main className="content">
        <section className="playlist group">

          <header>
            <h2 className="playlist-title">Most Popular Tracks</h2>
            <ul className="playlist-menu">
              <li className="highlight"><a href="#">Now</a></li>
              <li><a href="#">Time Machine</a></li>
              <li><a href="#">Only Remixes</a></li>
              <li><a href="#">No Remixes</a></li>
              <li><a href="#">Artists</a></li>
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
  }
});

module.exports = Popular;
