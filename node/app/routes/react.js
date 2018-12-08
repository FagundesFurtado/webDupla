module.exports = function(app) {
	app.get('/react', function(req,res){
      console.log("React react");
     res.status(200).send( {body: "Testando isso aqui"});
	}) ;


	app.post('/react', function(req,res){
    console.log("React Post");

    console.log(res)
    let body = req.body;

    console.log("Usuario ", body.user.username);
    console.log("Token " ,body.token.value);

    res.status(200).send();
	});

	app.delete('/react', function(req, res){
		app.app.react.react.delete(app,req,res);

	});

	app.put('/react', function(req,res){
		app.app.react.aluno.put(app,req,res);
});
}
