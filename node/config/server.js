
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
var authConfig = require('./auth');
const https = require('https');
//var jquery = require('jQuery');
var cors = require('cors');




var app = express();

//setar view engine e view express
var whitelist = [
  'https://smartssa.com.br:3000',
];
var corsOptions = {
  origin: function(origin, callback){
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));
app.set('view engine','ejs');
app.set('views','./app/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./app/public'));
app.use(expressSession({
	secret: authConfig.secret,
	resave: false,
	saveUnintialized: false,
}))
// app.use(cors());
//app.use(jquery)
app.use(expressValidator());



//autoload das rotas e modulos do objeto app
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controller')
	.into(app);

module.exports = app;
