var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),

    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory,

    Latest = require('./components/track/latest'),
    Popular = require('./components/track/popular'),
    Profile = require ('./components/user/profile'),
    Favorites = require('./components/track/favorites'),
    Feed = require('./components/track/feed'),
    Post = require('./components/post'),
    App = require('./components/App'),
    Artist = require('./components/artist'),
    Blog = require('./components/blog'),

    ApiUtil = require('./util/api_util'),
    Modal = require("react-modal");

var router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Latest}/>
      <Route path="artists/:id" component={Artist}/>
      <Route path="blogs/:id" component={Blog}/>
      <Route path="users/:id" component={Profile}>
        <Route path="favorites" component={Favorites}/>
        <Route path="feed" component={Feed}/>
      </Route>
      <Route path="popular" component={Popular}/>
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  Modal.setAppElement(root);
  ReactDOM.render(router, root);
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 42) {
    $("#player-container").addClass("sticky");
  }
  else{
    $("#player-container").removeClass("sticky");
  }
});

// function _requireLoggedIn(nextState, replace, callback) {
//   if (!SessionStore.currentUserHasBeenFetched()) {
//     ApiUtil.fetchCurrentUser(_requireIfNotLoggedIn);
//   } else {
//     _redirectIfNotLoggedIn();
//   }
//
//   function _redirectIfNotLoggedIn () {
//     if (!SessionStore.isLoggedIn()) {
//       replace("/login");
//     }
//
//     callback();
//   }
// }


// <Route path="upload" component={TrackForm}/>
// <Route path="tracks" component={TrackIndex}>
