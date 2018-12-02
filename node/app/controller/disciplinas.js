var auth  = require('./auth');


module.exports.get = function(app, req, res){


  auth.middleware(app,req,res, function(campoToken){
      console.log(campoToken)
    // var curso = req.query.curso;
      let id = campoToken.id;
      var universidade = campoToken.universidade;
      var curso = req.header("curso");
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);
      //genericDAO.find({curso: curso},"disciplina",function(error, result){
    //  genericDAO.read("disciplina",function(error, result){
    let query = "call buscaDisciplinas("+String(universidade)+")";

    genericDAO.execute(query,function(error, result){
        if(error){
          console.log("erro")
          console.log(error);
        }
        else{
        res.send(result[0]);
      }
      });
      connection.end();


    })



}

module.exports.post = function(app,req,res){

  auth.middleware(app,req,res, function(campoToken){
    auth.verificaAdmin(app,req,res,campoToken, function(campoToken){

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
}, function(){
  res.status(400).send({admin: 0});
});
});
}


module.exports.delete = function(app,req,res){

  auth.middleware(app,req,res, function(campoToken){
    var disciplina = req.header("disciplina");
  var connection = app.config.dbConnection();
  var genericDAO = new app.app.models.GenericDAO(connection);

  genericDAO.delete({idDisciplina: disciplina},"disciplina", function(error, result){
    if(error){
      console.log("erro")
      console.log(error);
    }
    else {
      res.send({deletado: 1})
    }

  });



  //res.send(requisicao);
  connection.end();
});
}

module.exports.put = function(app,req,res){
  auth.middleware(app,req,res, function(){
  var requisicao = req.body;
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
