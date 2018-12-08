var auth  = require('./auth');
module.exports.get = function(app, req, res){


}


module.exports.post = function(app,req,res){

  console.log("React Post");

  let body = JSON.parse(req.body);

  console.log("Usuario ", body.user.username);
  console.log("Token " ,body.token.value);

  res.status(200).send();
}


module.exports.delete = function(app,req,res){


}

module.exports.put = function(app,req,res){

}
