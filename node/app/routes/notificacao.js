module.exports = function(app) {
	app.get('/notificacao', function(req,res){
      console.log("React react");
     res.status(200).send( {body: "Testando isso aqui"});
	}) ;


	app.post('/notificacao', function(req,res){
    console.log("React Post");

    let body = req.body;

    console.log("Usuario ", body.user.username);
    console.log("Token " ,body.token.value);

    res.status(200).send();
	});

	app.delete('/notificacao', function(req, res){


	});

	app.put('/notificacao', function(req,res){

});
}
