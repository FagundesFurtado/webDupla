var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var authConfig = require('../../config/auth');
module.exports.generationToken = function(params = {}){
	return 	 jwt.sign(params,authConfig.secret, {expiresIn: 86400,});
}



module.exports.verify = function(app, req, res, token, funcao){
	console.log("jwt ",req.session.token);
  jwt.verify(token,authConfig.secret, function(error, decoded){
		console.log("verificando ", decoded);
      if(error) {
        console.log(error);
        return res.status(401).send({error: 'Token invalido'})
      }
      console.log("token ok");
      console.log(decoded);
			funcao();


  } );


}
module.exports.middleware = function(app,req,res,token, funcao){
	// if(req.session.autenticado){
	if(true){
		this.verify(app,req,res,token,funcao);
	}
	else {
		return res.status(400).send({error: 'Nao autenticado'})
	}

}
