module.exports = function(app) {
	app.get('/react', function(req,res){
      console.log("React react");
     res.status(200).send( {body: "Testando isso aqui"});
	}) ;


	app.post('/react', function(req,res){
    console.log("React Post");

    let body = req.body;

    console.log("Usuario ", body.user.username);
    console.log("Token " ,body.token.value);

    console.log("Terminou");
    res.status(200).send();
	});

	app.delete('/react', function(req, res){


	});

	app.put('/react', function(req,res){

});
}
