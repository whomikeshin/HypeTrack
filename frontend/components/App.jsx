var React = require('react');
var SessionStore = require('../stores/session');
var ApiUtil = require('../util/api_util');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      currentUser: null
    };
  },

  componentDidMount: function () {
    this.sessionStoreToken = SessionStore.addListener(this.handleChange);
    this.handleChange();
  },

  render: function () {
    var button, welcomeMessage;

    if (this.state.currentUser) {
      button = <button onClick={ApiUtil.logout}>Logout</button>
      welcomeMessage = <h2>{this.state.currentUser.username}</h2>;
    } else {
      welcomeMessage = <h2>Sign In Bitch!</h2>;
    }

    return (
      <div>
        {button}
        {welcomeMessage}
        <header className="header"><h1>HYPE TRAIN</h1></header>
        {this.props.children}
      </div>
    );
  },

  handleChange: function () {
    if (SessionStore.isLoggedIn()) {
      this.setState({ currentUser: SessionStore.currentUser() });
    } else {
      this.context.router.push("/login");
    }
  }
});

module.exports = App;
