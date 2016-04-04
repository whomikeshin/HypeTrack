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
        <h1>Sign Up For Hype Train</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input onChange={this.updateEmail} type="text" value={this.state.email}/>

          <label htmlFor="username">Username</label>
          <input onChange={this.updateUsername} type="text" value={this.state.username}/>

          <label htmlFor="password">Password</label>
          <input onChange={this.updatePassword} type="password" value={this.state.password}/>

          <button>Submit</button>
        </form>
      </div>
    );
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var router = this.context.router;
    ApiUtil.createUser(this.state, function() {
      router.push("/tracks");
    });
  },

  updateEmail: function (e) {
    this.setState({ email: e.currentTarget.value });
  },

  updateUsername: function (e) {
    this.setState({ username: e.currentTarget.value });
  },

  updatePassword: function (e) {
    this.setState({ password: e.currentTarget.value });
  }
});

module.exports = UserForm;
