module.exports = function(app) {

	app.get('/postman', function(req,res){
		app.app.controller.auth.middleware(app,req,res, token,function(){

		})
		res.send(req.query);
    console.log(req.query);
	});
	app.post('/postman', function(req,res){

		var json = req.body;
    console.log(json);
		res.send(json);
	});
}
