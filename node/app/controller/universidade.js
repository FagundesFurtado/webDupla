var auth  = require('./auth');
module.exports.get = function(app, req, res){


  auth.middleware(app,req,res, function(id){

    // var curso = req.query.curso;
    auth.verify(app,req,res,function(id){
      console.log("id - ",id);
        var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);
      var universidade = 0;
      genericDAO.find({id},"usuario",function(error, result){
        if(error){
          console.log("erro")
            return res.status(400).send({error: 'Falha ao encontrar usuario'});
        }

        universidade = result[0].universidade;

        console.log(result[0].universidade);
      // })
      // .then( async function(id){

       genericDAO.find({idInstituto: universidade}, "instituto", function(err,result1){

            if(err)
            {
              console.log("erro busca universidade");
              console.log(err);
              return res.status(400).send({error: 'Falha ao encontrar universidade'});
            }
            res.send(result1);
        });

      });




    //  connection.end();
  });


    })



}

module.exports.post = function(app,req,res){

  auth.middleware(app,req,res, function(){
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

  auth.middleware(app,req,res, function(){
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
  auth.middleware(app,req,res, function(){
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
