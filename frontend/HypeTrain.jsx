var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var TrackIndex = require('./components/track/index');
var TrackForm = require('./components/track/track_form');
var App = require('./components/app');
var LoginForm = require('./components/login_form');
var UserForm = require('./components/user/user_form');
var ApiUtil = require('./util/api_util');

var router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="tracks" component={TrackIndex}/>
      <Route path="upload" component={TrackForm}/>
    </Route>

    <Route path="/users" component={UserForm}/>
    <Route path="/login" component={LoginForm}/>
  </Router>
);

function _requireLoggedIn(nextState, replace, callback) {
  if (!SessionStore.currentUserHasBeenFetched()) {
    ApiUtil.fetchCurrentUser(_requireIfNotLoggedIn);
  } else {
    _redirectIfNotLoggedIn();
  }

  function _redirectIfNotLoggedIn () {
    if (!SessionStore.isLoggedIn()) {
      replace("/login");
    }

    callback();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  ReactDOM.render(router, root);
});
