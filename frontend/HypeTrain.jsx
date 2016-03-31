var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var TrackIndex = require('./components/track/index');
// var App = require('./components/app');
var ApiUtil = require('./util/api_util');

// window.initializeApp = function () {
//   debugger;
//   ReactDOM.render(
//     <Router history={hashHistory} >
//       <Route path="/" component={App} >
//         <Route path="tracks" component={TrackIndex} />
//       </Route>
//     </Router>,
//     document.getElementById('root')
//   );
// };

function _requireLoggedIn(nextState, replace, asyncCompletionCallback) {
  if (!SessionStore.currentUserHasBeenFetched()) {
    ApiUtil.fetchCurrentUser(_requireIfNotLoggedIn);
  } else {
    _redirectIfNotLoggedIn();
  }
}

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header className="header"><h1>HYPE TRAIN</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App} >
    <IndexRoute component={TrackIndex} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
