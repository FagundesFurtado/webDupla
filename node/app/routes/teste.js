module.exports = function(app) {
	app.get('/teste', function(req,res){

		var varTeste = req.query.teste;
		console.log("ta chegando aqui ", varTeste);
		res.send("recebido");

	}) ;
	app.get('/', function(req,res){
		res.send("funcionando !");
	});
}