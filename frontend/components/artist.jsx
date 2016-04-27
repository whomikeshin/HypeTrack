var React = require('react');
var ApiUtil = require('../util/api_util');
var Loader = require('./loader');
var ArtistStore = require('../stores/artist');
var TrackIndexItem = require('./track/index_item');

var Artist = React.createClass({

  getInitialState: function () {
    return { artist: null };
  },

  componentDidMount: function () {
    this.onChangeToken = ArtistStore.addListener(this._onChange);
    ApiUtil.fetchArtist(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.onChangeToken.remove();
  },

  _onChange: function () {
    this.setState({ artist: ArtistStore.find(this.props.params.id) });
  },

  render: function () {
    var artist = this.state.artist;

    if(!artist) {
      return <Loader/>;
    }

    return(
      <main className="content">
        <section className="playlist group">
          <header className="profile-header group">
            <figure className="profile-image">
              <img src={artist.tracks[0].posts[0].thumb_url}/>
            </figure>
            <h1 className="profile-name">{artist.name}</h1>
          </header>

          <header>
            <ul className="playlist-menu">
              <li><a href="#">Newest First↓</a></li>
            </ul>
          </header>
          <ul className="tracks-list">
            {artist.tracks.map(function (track) {
              return <TrackIndexItem key={track.id} track={track} />;
            })}
          </ul>
        </section>
      </main>
    );
  }
});

module.exports = Artist;
