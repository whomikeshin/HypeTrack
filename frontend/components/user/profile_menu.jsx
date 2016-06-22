var React = require('react');
var ApiUtil = require('../../util/api_util');
var SessionStore = require('../../stores/session');
var Link = require('react-router').Link;

var ProfileMenu = React.createClass({
  render: function() {
    var currentUser = SessionStore.currentUser();
    var imgSource = currentUser.thumb_url ||
      "https://s3.amazonaws.com/hype-train-dev/seed-images/hypem.jpg";

    return(
      <div className="dropdown">
        <a href="#">Me</a>
        <figure className="profile-image-small"><img src={imgSource}/></figure>

      <ul className="profile-list group">
          <li><Link to={"/users/" + currentUser.id + "/feed"}>Feed</Link></li>
          <li><Link to={"/users/" + currentUser.id + "/favorites"}>Favorites</Link></li>
          <li>Friends</li>
          <li>Find Friends</li>
          <li>Find Blogs</li>
          <li>Settings</li>
          <li><button className="logout" onClick={ApiUtil.logout}>Logout</button></li>
        </ul>
      </div>
    );
  }
});

module.exports = ProfileMenu;
