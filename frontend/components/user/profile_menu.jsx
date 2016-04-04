var React = require('react');
var ApiUtil = require('../../util/api_util');

var ProfileMenu = React.createClass({
  render: function() {
    return(
      <div>
        <ul className="profile-list">
          <li><a href="#">Feed</a></li>
          <li><a href="#">Favorites</a></li>
          <li><a href="#">Friends</a></li>
          <li><a href="#">Find Friends</a></li>
          <li><a href="#">Find Blogs</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
          <button className="logout" onClick={ApiUtil.logout}>Logout</button>
        </ul>
      </div>
    );
  }
});

module.exports = ProfileMenu;
