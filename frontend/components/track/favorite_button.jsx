var React = require('react');
var ApiUtil = require('../../util/api_util');
var PlayerActions = require('../../actions/player_actions');
var SessionStore = require('../../stores/session');
var FavLoginModal = require('../user/fav_modal');

var FavoriteButton = React.createClass({
  render: function () {
    var currentUser = this.props.user,
        favButton;

    if (currentUser) {
      favButton = this._favorite();
    } else {
      favButton = <FavLoginModal/>;
    }

    return (
      <div>
        {favButton}
      </div>
    );
  },

  _favorite: function () {
    var track = this.props.track;
    if (track.favorite_ids.includes(currentUser.id)) {
      return (
        <button
          id="unfavorite"
          onClick={this._unfavorTrack.bind(this, track.id)}>
          <i className="fa fa-heart"></i>
        </button>
      );
    } else {
      return (
        <button
          id="favorite"
          onClick={this._favorTrack.bind(this, track.id)}>
          <i className="fa fa-heart"></i>
        </button>
      );
    }
  },

  _favorTrack: function (trackId) {
    ApiUtil.createFavorite(trackId);
  },

  _unfavorTrack: function (trackId) {
    ApiUtil.destroyFavorite(trackId);
  }
});

module.exports = FavoriteButton;
