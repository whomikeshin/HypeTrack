var React = require('react');
var UserStore = require('../../stores/user');
var SessionStore = require('../../stores/session');
var TrackIndexItem = require('../track/index_item');
var TrackStore = require('../../stores/track');
var ApiUtil = require('../../util/api_util');

var Profile = React.createClass({

  getInitialState: function () {
    return { user: null };
  },

  componentDidMount: function () {
    this.onChangeToken = UserStore.addListener(this._onChange);
    this.onTrackChangeToken = TrackStore.addListener(this._onTrackChange);
    ApiUtil.fetchUser(this.props.params.id);
  },

  componentWillUnmount: function () {
    this.onChangeToken.remove();
    this.onTrackChangeToken.remove();
  },

  _onChange: function () {
    this.setState({ user: UserStore.find(this.props.params.id) });
  },

  _onTrackChange: function () {
    this.forceUpdate();
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ user: UserStore.find(newProps.params.id) });
  },

  render: function () {
    var user = this.state.user;

    if(!user) {
      return <p>Loading user...</p>;
    }

    return (
      <main className="content">
        <section className="playlist group">
          <header className="profile-header group">
            <figure className="profile-image">
              <img src={"https://s3.amazonaws.com/hype-train-dev/seed-images/hypem.jpg"}/>
            </figure>
            <h2 className="profile-name">{user.username}</h2>
          </header>

          <ul className="tracks-list">
            {user.favorite_tracks.map(function (track) {
              return <TrackIndexItem key={track.id} track={track} />;
            })}
          </ul>
        </section>
      </main>
    );
  },
});

module.exports = Profile;
