'use strict'
var React = require('react');
var LoginActions = require('../actions/loginActions');

var LoginForm = React.createClass({
  loginClick: function() {
    var email = React.findDOMNode(this.refs.email).value.trim();
    var pass = React.findDOMNode(this.refs.password).value.trim();
    
    if (email.trim() && pass.trim){
      LoginActions.login_send(email, pass);
    }
  },
  render: function() {
    return (
      <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input ref="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input ref="password" type="password" className="validate"/>
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </form>
          <div className="col s6">
            <a className="waves-effect waves-light btn" onClick={this.loginClick}>Stuff</a>
          </div>
        </div>
      );
  }
});


module.exports = LoginForm;