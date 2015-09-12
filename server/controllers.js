var models = require('./models');

module.exports = {
	schools: {
		get: function(req, res) {
			models.schools.get(function(err, result) {
				res.json(result);
			});
		}
	},
	loans: {
		get: function(req, res) {
			models.loans.get(function(err, result) {
				res.json(result);
			});
		}
	}
};