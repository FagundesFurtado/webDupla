var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var authConfig = require('../../config/auth');
module.exports.generationToken = function(params = {}){
	return 	 jwt.sign(params,authConfig.secret, {expiresIn: 86400,});

}



module.exports.verify = async function(app, req, res, funcao){
  var token = req.header("Authorization");
  console.log(token)
  jwt.verify(token,authConfig.secret, function(error, decoded){
		console.log("verificando ", decoded);
      if(error) {
        console.log(error);
        return res.status(401).send({error: 'Token invalido'})
      }
      console.log("token ok");
      console.log(decoded);
			funcao(decoded.id);


  } );


}
module.exports.middleware = function(app,req,res, funcao){
	// if(req.session.autenticado){

	if(true){

		this.verify(app,req,res,funcao);
	}
	else {
		return res.status(400).send({error: 'Nao autenticado'})
	}

}
