var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session');
var ApiUtil = require('../util/api_util');
var UserModal = require('./user/user_modal');
var LoginModal = require('./user/login_modal');
var ProfileMenu = require('./user/profile_menu');
var NavPlayer = require('./nav_player');
var NavControls = require('./nav_controls');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      currentUser: null
    };
  },

  componentWilMount: function () {
    this.sessionStoreToken = SessionStore.addListener(this.handleChange);
    this.handleChange();
  },

  render: function () {
    var sideMenu;
    if (this.state.currentUser) {
      sideMenu = <div className="profile-menu">
                    <ProfileMenu/>
                 </div>;
    } else {
      sideMenu = <ul className="login-menu">
                    <li><LoginModal/></li>
                    <li><UserModal/></li>
                    <li>
                      <button className="player-button" onClick={this._guestLogin}>
                        Guest
                      </button>
                    </li>
                  </ul>;
    }

    return (
      <div>
        <header id="header">
          <nav className="header-nav">
            <Link className="header-logo" to={"/"}>
              Hype Track
              <img className="record"
                src="https://s3.amazonaws.com/hype-train-dev/seed-images/record.png"/>
            </Link>
            <ul className="header-nav-list">
              <li><a href="#/">Latest</a></li>
              <li><a href="#/popular">Popular</a></li>
            </ul>
          </nav>
        </header>

        <nav id="player-container">
          <div className="player">
            <div className="player-controls">
              <li><NavControls/></li>
              <li><NavPlayer/></li>
            </div>

            <div className="side-menu group">
              {sideMenu}
            </div>
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
  },

  _guestLogin: function () {
    var router = this.context.router;
    ApiUtil.login({ username: "yeezus", password: "password" }, function() {
      router.push("/");
    });
  }
});

module.exports = App;
