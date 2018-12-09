var auth = require('./auth');

module.exports.get = function (app, req, res) {

  /*
    CONDICOES?

  */
  auth.middleware(app, req, res, function (campoToken) {
    auth.verificaAdmin(app, req, res, campoToken, function (campoToken) {

      console.log(campoToken);
      var id = campoToken.id;
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);
      var universidade = campoToken.universidade;

      // })
      // .then( async function(id){
      if (campoToken.admin == 1) {
        genericDAO.find({ idInstituto: universidade }, "instituto", function (err, result1) {

          if (err) {
            console.log("erro busca universidade");
            console.log(err);
            return res.status(400).send({ error: 'Falha ao encontrar universidade' });
          } else {
            res.send(result1);
          }
        });
      }
      if (campoToken.admin == 2) {
        genericDAO.read("instituto", function (err, result1) {

          if (err) {
            console.log("erro busca universidade");
            console.log(err);
            return res.status(400).send({ error: 'Falha ao encontrar universidade' });
          } else {
            res.send(result1);
          }
        });
      }

    }, function (token) {
      console.log(token);
    });
  });



}

module.exports.post = function (app, req, res) {

  auth.middleware(app, req, res, function (campoToken) {
    auth.verificaAdmin(app, req, res, campoToken, function (campoToken) {
      var requisicao = req.body;
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);

      genericDAO.create(requisicao, "instituto", function (error, result) {
        if (error) {
          console.log("erro")
          console.log(error);
        }
        else {
          res.send(requisicao);
        }
      });

      connection.end();
    });
  }, function () {
    return res.status(400).send({ admin: 0 });
  });
}


module.exports.delete = function (app, req, res) {

  auth.middleware(app, req, res, function (campoToken) {
    auth.verificaAdmin(app, req, res, campoToken, function (campoToken) {

      var universidade = req.header("universidade");

      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);
      genericDAO.delete({ idInstituto: universidade }, "instituto", function (error, result) {
        if (error) {
          console.log("erro")
          console.log(error);
        }
        else {
          res.send({ deletado: 1 })
        }

      });
      connection.end();
    }, function () {
      return res.status(400).send({ admin: 0 });
    });
  });
}

module.exports.put = function (app, req, res) {
  auth.middleware(app, req, res, function (campoToken) {
    auth.verificaAdmin(app, req, res, campoToken, function (campoToken) {

      var requisicao = req.body;
      console.log(requisicao)
      var connection = app.config.dbConnection();
      var genericDAO = new app.app.models.GenericDAO(connection);
      console.log("update");
      genericDAO.update(requisicao, { idInstituto: requisicao.idInstituto }, "instituto", function (error, result) {
        if (error) {
          console.log("erro")
          console.log(error);
          return res.status(400).send({ atualizado: 0 });
        }
        res.send({ atualizado: 1 })
      });

      connection.end();
    }, function () {
      return res.status(400).send({ admin: 0 });
    });
  });
}
