var app = require('./config/server.js');




var https = require('https');
var http = require('http');
var fs = require('fs');



https.createServer({
  key: fs.readFileSync('privatekey.pem'),
  cert: fs.readFileSync('certificate.pem')
}, app).listen(3000, ()=> console.log("Rodando express com HTTPS") );




// app.listen(3000, function(){

// 	console.log("Rodando express");

// });
