module.exports = function(app) {
	app.get('/alunodisciplina', function(req,res){
		app.app.controller.alunodisciplina.get(app,req,res);
	}) ;


	app.post('/alunodisciplina', function(req,res){
		app.app.controller.alunodisciplina.post(app,req,res);
	});

	app.delete('/alunodisciplina', function(req, res){
		app.app.controller.alunodisciplina.delete(app,req,res);

	});

	app.put('/alunodisciplina', function(req,res){
		app.app.controller.alunodisciplina.put(app,req,res);
});
}
