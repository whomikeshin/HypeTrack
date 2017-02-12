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

    Remix = require('./components/track/remix');
    NoRemix = require('./components/track/no_remix');
    Freshest = require('./components/track/freshest');

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
      <Route path="freshest" component={Freshest}/>
      <Route path="remix" component={Remix}/>
      <Route path="noremix" component={NoRemix}/>
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
