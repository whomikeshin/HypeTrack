var React = require('react');
var ReactRouter = require('react-router');
var SessionStore = require('../../stores/session');
var ApiUtil = require('../../util/api_util');

var IndexItem = React.createClass({
  // mixins: [ReactRouter.history],
  render: function () {
    var favoriteButton;
    var track = this.props.track;
    var currentUser = SessionStore.currentUser();

    if (currentUser) {
      favoriteButton = this._favorite();
    }

    return (
      <li className="track group">

        <section className="track-detail-container">
          <div className="track-artist">
            {track.artist_name}
          </div>

          <p className="track-dash"> - </p>

          <div className="track-name">
            {track.title}
          </div>

          <section className="track-blog">
            <div className="track-blog-count">
              Posted by {track.blog_count} blogs
            </div>

            <div className="track-blog-name">
              {track.blogs[0].name}
            </div>

            <p className="track-blog-description">
              {track.posts[0].track_info.slice(0, 200).concat("...")}
            </p>
          </section>

          <div className="fav-div">
            {track.favorite_count}
            {favoriteButton}
          </div>

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
          <div className="heart">♥</div>
        </button>
      );
    } else {
      return (
        <button
          className="favorite"
          onClick={this._favorTrack.bind(this, track.id)}>
          <div className="heart">♥</div>
        </button>
      );
    }
  },

  _favorTrack: function (track_id) {
    ApiUtil.createFavorite(track_id);
  },

  _unfavorTrack: function (track_id) {
    ApiUtil.destroyFavorite(track_id);
  }
});

module.exports = IndexItem;
