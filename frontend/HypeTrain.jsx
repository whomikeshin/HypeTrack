var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Index = require('./components/track/index');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header className="header"><h1>Hype Train</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Index} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
