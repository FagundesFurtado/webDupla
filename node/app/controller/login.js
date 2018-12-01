var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var authConfig = require('../../config/auth');
function generationToken(params = {}){
	return 	 jwt.sign(params,authConfig.secret, {expiresIn: 86400,});
}
module.exports.register = function(app, req, res){
  var connection = app.config.dbConnection();
  var genericDAO = new app.app.models.GenericDAO(connection);
  var {usuario} = req.body;
  var {senha} = req.body;
  // var usuario = requisicao.usuario;

  try{

     genericDAO.find({usuario},"usuario",function(error, result){
      console.log(result.length)
      busca = result.length;
      console.log("busca ", busca)
      if(result.length > 0){
        return res.status(400).send("error: usuario ja existente");
      }
      else {
      var senhaCriptografada = crypto.createHash('md5').update(senha).digest('hex');
      usuario = {
        usuario: usuario,
        senha: senhaCriptografada,
        tipo: 0,
        token: "token ",
      }
      genericDAO.create(usuario, "usuario", function(error, result){

        if(error){
          console.log(error);
        }
        res.send({usuario: usuario.usuario, token: token});
      });
    }
});
}  catch(err){
    console.log(err);
  }




}


module.exports.autenticar = function(app, req, res){
      console.log("autenticar");
  		var {usuario, senha} = req.body;
  		var connection = app.config.dbConnection();
  		var genericDAO = new app.app.models.GenericDAO(connection);
  		 genericDAO.find({usuario},"usuario",function(error, result){
  				if(error){
  					console.log("erro autenticacao");
  					console.log(error);
  					return res.status(400).send("error: erro ao encontrar usuario");

  				}
  				if(result.length === 0){
  					return res.status(400).send("error: usuario inexistente");
  				}else {
  					result = result[0];
  					if(crypto.createHash('md5').update(senha).digest('hex') === result.senha){
  						senha = undefined;
  						let token = generationToken({id: result.id});
  						result.token = token;

  						genericDAO.update(result,{id: result.id},"usuario",function(error,result){
								if(error)
									{console.log("erro ao salvar token")}})
									.then(
  							function(){
  								req.session.autorizado = true;
  								req.session.token = token;
  								req.session.usuario = usuario;
  								console.log("req session");
  								console.log(req.session);
  								/*
  								res.redirect("")
  								ou nem precisa enviar o token aqui em baixo
  								*/
  								res.send({id: result.id,usuario: usuario, token: token});
  							}
  						);
  					}
  					else {
  						res.status(400).send("error: senha invalida");
  					}
  				}

  		});


}
