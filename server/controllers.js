
var db = require('./orm');


module.exports = {
	schools: {
		get: function(req, res) {
			db.Schools.findAll({
				attributes: ["name", "schoolid", "state"]
			})
			.then(function(results) {
				res.send(results);
			});

			// db.Schools.findAll({ 
			// 	include: [{
			// 		model: db.Allloans,
			// 		required: true
			// 		}] 
			// 	})
			// 	.then(function(results) {
			// 		res.send(results);
			// 	});
		}
	},
	loans: {
		post: function(req, res) {
			var schoolID = req.body.id;

			db.Allloans.findAll({
				where: {
					school: schoolID
				}
			})
			.then(function(results) {
				res.send(results);
			});
		}
	},
	states: {
		get: function(req, res) {
			db.StateTotal.findAll()
				.then(function(results) {
					res.send(results);
				});
		}
	}
};

