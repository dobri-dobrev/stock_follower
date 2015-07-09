'use strict'
var React = require('react');
var RouterWrapper = require('react-router');
var RouteHandler = RouterWrapper.RouteHandler;

var App = React.createClass({
  getInitialState: function() {
    return this._getLoginState();
  },
  _getLoginState: function() {
    return {
      userLoggedIn: false //TODO connect to store
    };
  },
  render: function() {
    return (
      <div className="container">
        <h1> App </h1>
        <RouteHandler/>
      </div>
    );
  }
});


module.exports = App;