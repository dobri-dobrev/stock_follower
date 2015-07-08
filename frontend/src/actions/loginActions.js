var LoginConstants = require('../constants/loginConstants');

var LoginActions = {

  /**
   * @param  {string} text
   */
  snd: function(text) {
  	console.log(text);
    // AppDispatcher.dispatch({
    //   actionType: LoginConstants.LOGIN_SEND,
    //   text: text
    // });
  },
};

module.exports = LoginActions;