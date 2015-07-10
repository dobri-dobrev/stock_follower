var LoginConstants = require('../constants/loginConstants.js');
var AuthService    = require('../services/authService.js');

var LoginActions = {
  login_send: function(email, pass) {
  	hash = this._generate_hash(email, pass);
    console.log(hash);
    // AppDispatcher.dispatch({
    //   actionType: LoginConstants.LOGIN_SEND,
    //   text: text
    // });
  },

  _generate_hash: function(email, pass) {
    return btoa(email+":"+pass);
  }
  
};

module.exports = LoginActions;