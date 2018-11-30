module.exports = function(app) {

	app.get('/postman', function(req,res){
		res.send(req.query);
	});
	app.post('/postman', function(req,res){
    console.log("post")
		var json = req.body;
    console.log(req.body);
		res.send(json);
	});
}
