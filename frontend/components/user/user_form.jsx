var React = require('react');
var ApiUtil = require('../../util/api_util');

var UserForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      email: "",
      username: "",
      password: "",
      activated: false,
      activation_token: "activated"
    };
  },

  render: function () {
    return (
      <div className="signup-form">
        <h1 className="form-header">Sign Up For Hype Train</h1>
        <form onSubmit={this._handleSubmit}>
          <label htmlFor="email">Email</label>
          <input onChange={this._updateEmail} type="text" value={this.state.email}/>
          <p className="signup-p">This address will be verified</p>

          <label htmlFor="username">Username</label>
          <input onChange={this._updateUsername} type="text" value={this.state.username}/>
          <p className="signup-p">Letters, numbers and _ only, please.</p>

          <label htmlFor="password">Password</label>
          <input onChange={this._updatePassword} type="password" value={this.state.password}/>
          <p className="signup-p">6 characters or more, be tricky!</p>

          <button className="form-submit">Submit</button>
        </form>
      </div>
    );
  },

  _handleSubmit: function (e) {
    e.preventDefault();

    var router = this.context.router;
    ApiUtil.createUser(this.state, function() {
      router.push("/tracks");
    });
  },

  _updateEmail: function (e) {
    this.setState({ email: e.currentTarget.value });
  },

  _updateUsername: function (e) {
    this.setState({ username: e.currentTarget.value });
  },

  _updatePassword: function (e) {
    this.setState({ password: e.currentTarget.value });
  }
});

module.exports = UserForm;
