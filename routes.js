<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>React Tutorial</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.6.2/remarkable.min.js"></script>
</head>
<body>
<div id="app"></div>
<script type="text/babel">
var ReactRouter = require('react-router');
var Router = React.Router.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home= require('../components/Home');

var routes = (
<Router>
<Route path='/' component={Main}>
<Route path='/home' component={Home} />
</Route>
</Router>
)
module.exports =routes'
</script>
</body>
</html>