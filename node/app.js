var app = require('./config/server.js');




var https = require('https');
var http = require('http');
var fs = require('fs');



// https.createServer({
//   key: fs.readFileSync('privatekey.pem'),
//   cert: fs.readFileSync('certificate.pem')
// }, app).listen(3000, ()=> console.log("Rodando express com HTTPS") );


https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(3000);

// app.listen(3000, function(){

// 	console.log("Rodando express");

// });
