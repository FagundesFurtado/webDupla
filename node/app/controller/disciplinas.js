var auth  = require('./auth');
module.exports.get = function(app, req, res){
  var token = req.header("Authorization")
  token = JSON.parse(token);
  token = token.token;

  auth.middleware(app,req,res, token, function(){
    var curso = req.query.curso;
    var connection = app.config.dbConnection();
    var genericDAO = new app.app.models.GenericDAO(connection);
    genericDAO.find({curso: curso},"disciplina",function(error, result){
      if(error){
        console.log("erro")
        console.log(error);
      }
      else{
      res.send(result);
    }
  });
  connection.end();
  })


}

module.exports.post = function(app,req,res){
  var token = req.get("Authorization")
  console.log("Token ", token)
  auth.middleware(app,req,res, token, function(){
  var requisicao = req.body;
  var connection = app.config.dbConnection();
  var genericDAO = new app.app.models.GenericDAO(connection);

  genericDAO.create(requisicao,"disciplina", function(error,result){
    if(error){
      console.log("erro")
      console.log(error);
    }
    else{
      res.send(requisicao);
    }
  });

  connection.end();
});
}


module.exports.delete = function(app,req,res){
  var token = req.query.token;
  auth.middleware(app,req,res, token, function(){
  var requisicao = req.query;
  var connection = app.config.dbConnection();
  var genericDAO = new app.app.models.GenericDAO(connection);
  var idDisciplina = requisicao.disciplina;
  console.log("disciplina a ser apagada "+idDisciplina);
  genericDAO.delete({idDisciplina: requisicao.disciplina},"disciplina", function(error, result){
    if(error){
      console.log("erro")
      console.log(error);
    }
    else {
      res.send({deletado: 1})
    }

  });



  res.send(requisicao);
  connection.end();
});
}

module.exports.put = function(app,req,res){
  var token = req.query.token;
  auth.middleware(app,req,res, token, function(){
  var requisicao = req.query;
  var connection = app.config.dbConnection();
  var genericDAO = new app.app.models.GenericDAO(connection);
  console.log("update");
  genericDAO.update(requisicao, {idDisciplina: requisicao.idDisciplina},"disciplina",function(error, result){
    if(error){
      console.log("erro")
      console.log(error);
    }
  });

  connection.end();

});
}
