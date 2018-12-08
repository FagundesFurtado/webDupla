module.exports = function(app) {
	app.get('/react', function(req,res){
		app.app.react.get(app,req,res);
	}) ;


	app.post('/react', function(req,res){
		app.app.react.post(app,req,res);
	});

	app.delete('/react', function(req, res){
		app.app.react.react.delete(app,req,res);

	});

	app.put('/react', function(req,res){
		app.app.react.aluno.put(app,req,res);
});
}
