var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var TrackIndex = require('./components/track/index');
var TrackForm = require('./components/track/track_form');
var Profile = require ('./components/user/profile');
var FavoriteIndex = require('./components/track/favorite_index');
var Post = require('./components/post');
var App = require('./components/app');

var ApiUtil = require('./util/api_util');
var Modal = require("react-modal");

var router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="tracks" component={TrackIndex}/>
      <Route path="upload" component={TrackForm}/>
      <Route path="users/:id" component={Profile}/>
        <IndexRoute component={FavoriteIndex}/>
    </Route>

    <Route path="/posts" component={Post}/>
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
