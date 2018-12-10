var auth  = require('./auth');


module.exports.get = function(app, req, res){


  auth.middleware(app,req,res, function(campoToken){
    console.log(campoToken)
    // var curso = req.query.curso;

    auth.verificacao(app,req,res, true, campoToken, function(campoToken){
        let id = campoToken.id;

      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);

        var query = "select alunodisciplina.*, disciplina.nome as disciplinaNome from alunodisciplina, disciplina where disciplina.idDisciplina = alunodisciplina.disciplina and alunodisciplina.aluno ="+String(campoToken.aluno);
       genericDAO.execute(query,function(error, result){
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
