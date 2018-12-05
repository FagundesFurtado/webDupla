var app = require('./config/server.js');




var https = require('https');
var http = require('http');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('privatekey.pem'),
  cert: fs.readFileSync('certificate.pem')
};



https.createServer(options, app).listen(3000);




// app.listen(3000, function(){

// 	console.log("Rodando express");

// });
