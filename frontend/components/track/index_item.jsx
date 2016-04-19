var React = require('react');
var ReactRouter = require('react-router');
// var Link = require('react-router').Link;
var SessionStore = require('../../stores/session');
var PlayerStore = require('../../stores/player');
// var TrackStore = require('../../stores/track');
var ApiUtil = require('../../util/api_util');
var FavLoginModal = require('../user/fav_modal');
var Player = require('./play_pause');
var PlayerActions = require('../../actions/player_actions');

var IndexItem = React.createClass({

  render: function () {
    var favoriteButton;
    var track = this.props.track;
    var currentUser = SessionStore.currentUser();
    if (currentUser) {
      favoriteButton = this._favorite();
    } else {
      favoriteButton = <div><FavLoginModal/></div>;
    }

    return (
      <li className="track group">

        <section className="track-detail-container">

          <div className="track-image">
            <img src={track.posts[0].thumb_url}/>
          </div>

          <div className="track-artist">
            {track.artist_name}
          </div>

          <p className="track-dash"> - </p>

          <div className="track-name">
            {track.title}
          </div>

          <section className="track-post">
            <div className="track-post-count">
              Posted by {track.post_count} blogs
            </div>

            <div className="track-blog-name">
              {track.blogs[0].name}
            </div>

            <p className="track-post-info">
              {track.posts[0].track_info.slice(0, 200).concat("...")}
            </p>

            <a href={track.posts[0].post_url} className="track-blog">Read Post →</a>

          </section>

          <span className="fav-div">
            {track.favorite_count}
            {favoriteButton}
            <Player track={this.props.track}/>
          </span>

        </section>
      </li>
    );
  },

  _favorite: function () {
    var track = this.props.track;
    var currentUser = SessionStore.currentUser();
    if (track.favorite_ids.includes(currentUser.id)) {
      return (
        <button
          className="unfavorite"
          onClick={this._unfavorTrack.bind(this, track.id)}>
          <div className="heart">&#9829;</div>
        </button>
      );
    } else {
      return (
        <button
          className="favorite"
          onClick={this._favorTrack.bind(this, track.id)}>
          <div className="heart">&#9829;</div>
        </button>
      );
    }
  },

  _favorTrack: function (track_id) {
    ApiUtil.createFavorite(track_id);
  },

  _unfavorTrack: function (track_id) {
    ApiUtil.destroyFavorite(track_id);
  },

  _onTrackChange: function () {
    this.forceUpdate();
  },
});

module.exports = IndexItem;
