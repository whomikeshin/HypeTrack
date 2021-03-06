var React = require('react');
var TrackStore = require('../../stores/track');
var ApiUtil = require('../../util/api_util');
var TrackIndexItem = require('./index_item');
var Loader = require('../loader');

function _getAllTracks () {
  return TrackStore.all();
}

var Latest = React.createClass({
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

    if (!tracks) {
      return <Loader/>;;
    }

    tracks.sort(function(a, b) {
      return b.created_at - a.created_at;
    });

    return (
      <main className="content">
        <section className="playlist">
          <header>
            <h2>Latest Blogged Music</h2>
            <ul className="playlist-menu">
              <li className="highlight"><a href="#">All</a></li>
              <li><a href="#/freshest">Freshest</a></li>
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
  }
});

module.exports = Latest;
