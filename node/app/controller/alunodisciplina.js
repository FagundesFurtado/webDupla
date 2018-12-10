var auth  = require('./auth');


module.exports.get = function(app, req, res){


  auth.middleware(app,req,res, function(campoToken){
    console.log(campoToken)
    // var curso = req.query.curso;

    auth.verificaAdmin(app,req,res, campoToken, function(campoToken){
      let aluno = campoToken.aluno;
      let disciplina = campoToken.disciplina;
      let professor = campoToken.professor;
      var universidade = campoToken.universidade;
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);
      //genericDAO.find({curso: curso},"disciplina",function(error, result){
      //  genericDAO.read("disciplina",function(error, result){
      var query = "select alunodisciplina.*, aluno.nome as nomeAluno, disciplina.nome as disciplinaNome from alunodisciplina, disciplina, aluno, professor where disciplina.idDisciplina = alunodisciplina.disciplina and aluno.idAluno = alunodisciplina.aluno and professor.idProfessor ="+String(professor);
      genericDAO.execute(query, function(err,result){
        if(err){
          console.log("erro professor alunodisciplina");
          console.log(err);
          return res.status(400).send({erro: 1});
        }
        return res.status(200).send(result);
      });
     //  if(aluno == false){
     //    genericDAO.find({aluno},"alunodisciplina",function(error, result){
     //      if(error){
     //        console.log("erro")
     //        console.log(error);
     //        return res.status(400).send({erro: 1});
     //      }
     //      else{
     //
     //
     //       return  res.status(200).send(result[0]);
     //     }
     //   });
     // }
     // else {
     //   genericDAO.find({disciplina},"alunodisciplina",function(error, result){
     //     if(error){
     //       console.log("erro")
     //       console.log(error);
     //       return res.status(400).send({erro: 1});
     //     }
     //     else{
     //
     //
     //      return  res.status(200).send(result[0]);
     //    }
     //  });
     // }
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
      var chave = req.header("chave");
      var disciplina = req.header("disciplina");
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);

      genericDAO.delete({chave},"alunodisciplina", function(error, result){
        if(error){
          console.log("erro")
          console.log(error);
          return res.status(400).send({erro: 1});
        }
        else {
        return res.send({deletado: 1})
        }

      });




  //res.send(requisicao);
  connection.end();
});
  });
}

module.exports.put = function(app,req,res){
  auth.middleware(app,req,res, function(){
    var requisicao = req.body;
    console.log("Me manda isso aqui cristiano")
    console.log(requisicao)
    var connection = app.config.dbConnection();
    var genericDAO = new app.app.models.GenericDAO(connection);
    console.log("update");
    var quantidade = 0;
    for(var i =0; i < requisicao.length;i++){
    let aluno = requisicao[i].aluno;
    let disciplina = requisicao[i].disciplina;
    //{aluno: aluno, disciplina: requisicao.disciplina}
    genericDAO.update(requisicao[i], {chave: requisicao[i].chave},"alunodisciplina",function(error, result){
        if(error){
          console.log("erro")
          console.log(error);
          return res.status(400).send({erro: 1});
        } else {
         //res.send({atualizado: 1});
         quantidade = quantidade+1;
        }
      });
    }
    connection.end();
      return res.status(200).send({atualizado: 1});



  });
}
