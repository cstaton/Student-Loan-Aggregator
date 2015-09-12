var mysql = require('mysql');
var rawD = require('./rawData');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'loans'
});

connection.connect(function(err) {

	if (!err) {
		console.log('Database is connected, you are ready to roll.\n\n');
	} else {
		console.log('ERROR: Database not connected...\n\n');
	}
});




