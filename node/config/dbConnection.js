var mysql = require('mysql');
var connMySQL = function(){
	console.log("Criou conexao ");
	return mysql.createConnection({
		host : 'localhost',
		user : 'peteca',
		password : 'petecambulante123',
		database : 'webdupla'

	});
};



module.exports = function(){
	return connMySQL;
};