module.exports = function(app) {
	app.get('/disciplina', function(req,res){

		var curso = req.query.curso;

		var token = req.query.curso;
		var varTeste = req.query.teste;
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
	}) ;
	app.post('/disciplina', function(req,res){
		var requisicao = req.body;
		//res.send(requisicao);
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

	app.delete('/disciplina', function(req, res){
		var requisicao = req.params.id;

		res.send(requisicao);


	});

	app.put('/disciplina', function(req,res){
		console.log("put");
		var requisicao = req.query.id;
		console.log(requisicao);
		res.send(requisicao);

	});

}
