var React = require('react');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: "",
      password: ""
    };
  },

  render: function () {
    return (
      <div className="login-form">
        <h1 className="form-header">Log In To Hype Train</h1>

        <form onSubmit={this._handleSubmit}>
          <label htmlFor="username">Username</label>
          <input onChange={this._updateUsername} type="text" value={this.state.username}/>

          <label htmlFor="password">Password</label>
          <input onChange={this._updatePassword} type="password" value={this.state.password}/>

          <button className="modal-button">Log in</button>
        </form>

        <button className="modal-button" onClick={this._guestLogin}>
          Guest Account
        </button>
      </div>
    );
  },

  _handleSubmit: function (e) {
    e.preventDefault();

    var router = this.context.router;

    ApiUtil.login(this.state, function() {
      router.push("/");
    });
  },

  _updateUsername: function (e) {
    this.setState({ username: e.currentTarget.value });
  },

  _updatePassword: function (e) {
    this.setState({ password: e.currentTarget.value });
  },

  _guestLogin: function () {
    this.setState({ username: "yeezus", password: "password"});
  }
});

module.exports = LoginForm;
