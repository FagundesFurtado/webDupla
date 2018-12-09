var auth  = require('./auth');


module.exports.get = function(app, req, res){


  auth.middleware(app,req,res, function(campoToken){
    console.log(campoToken)
    // var curso = req.query.curso;

    auth.verificacao(app,req,res, true, campoToken, function(campoToken){
        let id = campoToken.id;
      var universidade = campoToken.universidade;
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);

        var query = "select distinct professor.nome as nomeProfessor, departamento.nome as nomeDepartamento, curso.* from departamento, professor, instituto, curso where  curso.departamento = departamento.idDepartamento and professor.idProfessor= curso.professor and departamento.instituto = "+String(universidade);
       genericDAO.execute(query,function(error, result){
         console.log("busca curso");
         if(error){
          console.log("erro")
          console.log(error);
        }
        else{


         return  res.send(result);
       }


   });
       connection.end();


     }, function(){

      res.send({permissao: 0});
    });


  })



}

module.exports.post = function(app,req,res){

  auth.middleware(app,req,res, function(campoToken){
    auth.verificaAdmin(app,req,res,campoToken, function(campoToken){

      var requisicao = req.body;
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);

      genericDAO.create(requisicao,"curso", function(error,result){
        if(error){
          console.log("erro")
          console.log(error);
        }
        else{
          res.send(requisicao);
        }
      });

      connection.end();
    },
    function(){
      res.status(400).send({admin: 0});
    });
  });
}


module.exports.delete = function(app,req,res){
  auth.middleware(app,req,res, function(campoToken){

    auth.verificaAdmin(app,req,res,campoToken, function(campoToken){

      console.log("delete");
      var curso = req.header("curso");
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);

      genericDAO.delete({idCurso: curso},"curso", function(error, result){
        if(error){
          console.log("erro")
          console.log(error);
        }
        else {
          res.send({deletado: 1})
        }

      }, function(campoToken){
          res.status(401).send({admin: 0});

      });



  //res.send(requisicao);
  connection.end();
},
function(campoToken){
  res.status(400).send({admin: 0})
});
  });
}

module.exports.put = function(app,req,res){
  auth.middleware(app,req,res, function(){

    auth.verificacao(app,req,res, true, req.header("Autenticacao"), function(campoToken){
      var requisicao = req.body;
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);
      console.log("update\t", requisicao);

      genericDAO.update(requisicao, {idCurso: requisicao.idCurso},"curso",function(error, result){
        if(error){
          console.log("erro")
          console.log(error);
        }
        else {
          res.send({atualizado: 1})
        }
      });

      connection.end();
    },
    function(campoToken){

    });
  });
}
