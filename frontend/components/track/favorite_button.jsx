var React = require('react');
var ApiUtil = require('../../util/api_util');
var FavLoginModal = require('../user/fav_modal');

var FavoriteButton = React.createClass({
  getInitialState: function () {
    return ({
      currentTrack: this.props.track
    })
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ currentTrack: newProps.track })
  },

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
    var currentTrack = this.state.currentTrack,
        currentUser = this.props.user;

    if (currentTrack.favorite_ids.includes(currentUser.id)) {
      return (
        <button
          id="unfavorite"
          onClick={this._unfavorTrack.bind(this, currentTrack.id)}>
          <i className="fa fa-heart"></i>
        </button>
      );
    } else {
      return (
        <button
          id="favorite"
          onClick={this._favorTrack.bind(this, currentTrack.id)}>
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
  },
});

module.exports = FavoriteButton;
