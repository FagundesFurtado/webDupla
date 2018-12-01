var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var session = require('express-session');

var authConfig = require('../../config/auth');
function generationToken(params = {}){
	return 	 jwt.sign(params,authConfig.secret, {expiresIn: 86400,});
}
module.exports = function(app) {


	app.post('/register', async function(req,res){
		app.app.controller.login.register(app,req,res);
});
		
	app.post('/autenticacao', async function(req,res){

		app.app.controller.login.autenticar(app,req,res);


	});



}
