var mysql = require('mysql');

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


module.exports = connection;

