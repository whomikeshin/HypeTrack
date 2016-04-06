var React = require('react');
var ApiUtil = require('../../util/api_util');
var SessionStore = require('../../stores/session');
var Link = require('react-router').Link;

var ProfileMenu = React.createClass({
  render: function() {
    var currentUser = SessionStore.currentUser();
    return(
      <div className="dropdown">
        <Link to={"/users/" + currentUser.id}>Me</Link>
        <ul className="profile-list group">
          <li><a href="#">Feed</a></li>
          <li><a href="#">Favorites</a></li>
          <li><a href="#">Friends</a></li>
          <li><a href="#">Find Friends</a></li>
          <li><a href="#">Find Blogs</a></li>
          <li><a href="#">Settings</a></li>
          <li><button className="logout" onClick={ApiUtil.logout}>Logout</button></li>
        </ul>
      </div>
    );
  }
});

module.exports = ProfileMenu;
