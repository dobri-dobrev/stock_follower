'use strict';
var RouterWrapper = require('react-router');
var Route = RouterWrapper.Route;
var DefaultRoute = RouterWrapper.DefaultRoute;
var React = require('react');

var LoginForm = require('./components/loginForm.js');
var Home = require('./components/home.js')
var App = require('./components/app.js');

module.exports = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home}/>
    <Route name="login" path="login" handler={LoginForm}/>
  </Route>
);