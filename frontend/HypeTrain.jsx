var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Latest = require('./components/track/latest');
var Popular = require('./components/track/popular');
var Profile = require ('./components/user/profile');
var Favorites = require('./components/track/favorites');
var Feed = require('./components/track/feed');
var Post = require('./components/post');
var App = require('./components/app');
var Artist = require('./components/artist');
var Blog = require('./components/blog');

var ApiUtil = require('./util/api_util');
var Modal = require("react-modal");

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
