'use strict'
var Promise = require('bluebird');
var Request = require('request');
var consts  = require('../constants/appConstants.js');

var LOGIN_URL = consts.LOGIN_URL; 
module.exports = {
	login: function(user, pass){
		var hash = _generate_hash(user, pass);
		return new Promise(function (resolve, reject){
			Request.post(
				{
					url: LOGIN_URL,
					body: hash,
					json: true
				},
				function (err, response, body){
					if(err){
					  return reject(err);
					}
					if(response.statusCode >= 400){
					  return reject(body);
					}
					return resolve(body);
				}
			);
		});
	},

	_generate_hash: function(email, pass) {
    	return btoa(email+":"+pass);
 	}
}