var auth  = require('./auth');
module.exports.getAluno = function(app, req, res){
  var aluno = req.query.aluno;
  var connection = app.config.dbConnection();
  var genericDAO = new app.app.models.GenericDAO(connection);
  genericDAO.find({idAluno: aluno},"aluno",function(error, result){
    if(error){
      console.log("erro")
      console.log(error);
    }
    else{
    res.send(result);
  }
});
connection.end();

}

module.exports.getDisciplinas = function(app, req, res){
  var aluno = req.query.aluno;
  var disciplina = req.query.disciplina;
  var connection = app.config.dbConnection();
  var genericDAO = new app.app.models.GenericDAO(connection);
  genericDAO.find({idAluno: aluno},"aluno",function(error, result){
    if(error){
      console.log("erro")
      console.log(error);
    }
    else{
    res.send(result);
  }
});
connection.end();

}
