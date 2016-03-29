var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('root');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1>Hype Train</h1></header>
        {this.props.children}
      </div>
    );
  }
});


var routes = (
  <Route path="/" component={App}>
    <Route> path="users/:id" component={UserShow}</Route>
  </Route>
);

ReactDOM.render(<Router>{routes}</Router>, root);
