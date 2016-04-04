var React = require('react');
var SessionStore = require('../stores/session');
var ApiUtil = require('../util/api_util');
var Player = require('./player');

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
      button = <button className="logout" onClick={ApiUtil.logout}>Logout</button>;
      welcomeMessage = <h2>{this.state.currentUser.username}</h2>;
    } else {
      welcomeMessage = <h2>Sign In!</h2>;
    }

    return (
      <div>
        {button}
        {welcomeMessage}
        <header className="header">
          <nav className="header-nav group">

            <h1 className="header-logo">
              <a href="#">Hype Train</a>
            </h1>

            <ul className="header-nav-list">
              <li><a href="#">Latest</a></li>
              <li><a href="#">Popular</a></li>
              <li><a href="#">Genres</a></li>
            </ul>

          </nav>
        </header>
        <Player />
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
