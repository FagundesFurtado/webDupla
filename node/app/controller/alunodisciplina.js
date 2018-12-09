var auth  = require('./auth');


module.exports.get = function(app, req, res){


  auth.middleware(app,req,res, function(campoToken){
    console.log(campoToken)
    // var curso = req.query.curso;

    auth.verificaAdmin(app,req,res, campoToken, function(campoToken){
      let aluno = campoToken.aluno;
      let disciplina = campoToken.disciplina;
      var universidade = campoToken.universidade;
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);
      //genericDAO.find({curso: curso},"disciplina",function(error, result){
      //  genericDAO.read("disciplina",function(error, result){
      if(aluno == false){
        genericDAO.find({aluno},"alunodisciplina",function(error, result){
          if(error){
            console.log("erro")
            console.log(error);
            return res.status(400).send({erro: 1});
          }
          else{


           return  res.status(200).send(result[0]);
         }
       });
     }
     else {
       genericDAO.find({disciplina},"alunodisciplina",function(error, result){
         if(error){
           console.log("erro")
           console.log(error);
           return res.status(400).send({erro: 1});
         }
         else{


          return  res.status(200).send(result[0]);
        }
      });
     }
        connection.end();


      }, function(){
        console.log("nao admin")
      });
    auth.verificacao(app,req,res,campoToken.professor > 0, campoToken, function(campoToken){

    }, function(campoToken){
      console.log("nao admin")
    })

  })



}

module.exports.post = function(app,req,res){

  auth.middleware(app,req,res, function(campoToken){
    auth.verificaAdmin(app,req,res,campoToken, function(campoToken){

      var requisicao = req.body;
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);

      genericDAO.create(requisicao,"alunodisciplina", function(error,result){
        if(error){
          console.log("erro")
          console.log(error);
          return res.status(400).send({erro: 1});
        }
        else{
          return res.status(200).send(requisicao);
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
    auth.verificaAdmin(app,req,res, function(campoToken){
      var aluno = req.header("aluno");
      var disciplina = req.header("disciplina");
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);
      if(aluno == false){
      genericDAO.delete({aluno},"alunodisciplina", function(error, result){
        if(error){
          console.log("erro")
          console.log(error);
          return res.status(400).send({erro: 1});
        }
        else {
        return res.send({deletado: 1})
        }

      });
    }else {
      genericDAO.delete({disciplina},"alunodisciplina", function(error, result){
        if(error){
          console.log("erro")
          console.log(error);
          return res.status(400).send({erro: 1});
        }
        else {
        return res.send({deletado: 1})
        }

      });

    }



  //res.send(requisicao);
  connection.end();
});
  });
}

module.exports.put = function(app,req,res){
  auth.middleware(app,req,res, function(){
    var requisicao = req.body;
    var connection = app.config.dbConnection();
    var genericDAO = new app.app.models.GenericDAO(connection);
    console.log("update");
    let aluno = requisicao.aluno;
    let disciplina = requisicao.disciplina;
    if(aluno == false){
    genericDAO.update(requisicao, {disciplina: requisicao.disciplina},"disciplina",function(error, result){
        if(error){
          console.log("erro")
          console.log(error);
          return res.status(400).send({erro: 1});
        } else {
        return res.send({atualizado: 1});
        }
      });
  
  }else {
    genericDAO.update(requisicao, {aluno: requisicao.aluno},"disciplina",function(error, result){
      if(error){
        console.log("erro")
        console.log(error);
        return res.status(400).send({erro: 1});
      } else {
      return res.send({atualizado: 1});
      }
    });
  }
    connection.end();

  });
}
