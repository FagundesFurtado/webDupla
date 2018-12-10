module.exports = function(app) {
	app.get('/notaaluno', function(req,res){
		app.app.controller.notaaluno.get(app,req,res);
	}) ;


}
