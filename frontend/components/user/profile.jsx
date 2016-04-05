var React = require('react');
var UserStore = require('../../stores/user');
var ApiUtil = require('../../util/api_util');
var SessionStore = require('../../stores/session');

var Profile = React.createClass({

  // getInitialState: function () {
  //   return { user: null };
  // },
  //
  // componentDidMount: function () {
  //   this.onChangeToken = UserStore.addListener(this._onChange);
  //   ApiUtil.fetchUser(this.props.params.id);
  // },
  //
  // componentWillUnmount: function () {
  //   this.onChangeToken.remove();
  // },
  //
  // componentWillReceiveProps: function (nextProps) {
  //   ApiUtil.fetchUser(nextProps.params.id);
  // },

  render: function () {
    var currentUser = SessionStore.currentUser;
    return (
      <div>
        My Feed
        {currentUser.username}
      </div>
    );
  },

  _onChange: function () {
    var user = UserStore.find(this.props.params.id);
    this.setState({ user: user });
  }
});

module.exports = Profile;
