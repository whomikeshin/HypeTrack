var React = require('react');
var SessionStore = require('../stores/session');
var ApiUtil = require('../util/api_util');
var Player = require('./player');
var UserModal = require('./user/user_modal');
var LoginModal = require('./user/login_modal');
var ProfileMenu = require('./user/profile_menu');

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
    var sideMenu, welcomeMessage;
    if (this.state.currentUser) {
      welcomeMessage = <h2>{this.state.currentUser.username}</h2>;
      sideMenu = <div className="profile-menu">
                    <ProfileMenu />
                  </div>;
    } else {
      welcomeMessage = <h2>Sign In</h2>;
      sideMenu = <div className="login-menu">
                    <UserModal/>
                    <LoginModal />
                  </div>;
    }

    return (
      <div>
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

        <nav className="player-container">

          <div className="player group">
            <Player />
          </div>

          <div className="side-menu">
            {sideMenu}
          </div>

        </nav>
        {this.props.children}
      </div>
    );
  },

  handleChange: function () {
    if (SessionStore.isLoggedIn()) {
      this.setState({ currentUser: SessionStore.currentUser() });
    } else {
      this.setState({ currentUser: null });
    }
  }
});

module.exports = App;
