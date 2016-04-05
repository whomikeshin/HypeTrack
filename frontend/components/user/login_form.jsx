var React = require('react');
var ApiUtil = require('../../util/api_util');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: "guest",
      password: "password"
    };
  },

  render: function () {
    return (
      <div className="login-form">
        <h1>Log In To Hype Train</h1>

        <form onSubmit={this._handleSubmit}>
          <label htmlFor="username">Username</label>
          <input onChange={this._updateUsername} type="text" value={this.state.username}/>

          <label htmlFor="password">Password</label>
          <input onChange={this._updatePassword} type="password" value={this.state.password}/>

          <button>Log in</button>
        </form>
      </div>
    );
  },

  _handleSubmit: function (e) {
    e.preventDefault();

    var router = this.context.router;

    ApiUtil.login(this.state, function() {
      router.push("/tracks");
    });
  },

  _updateUsername: function (e) {
    this.setState({ username: e.currentTarget.value });
  },

  _updatePassword: function (e) {
    this.setState({ password: e.currentTarget.value });
  }
});

module.exports = LoginForm;
