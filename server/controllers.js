var models = require('./models');

module.exports = {
	schools: {
		get: function(req, res) {
			models.schools.get(function(err, result) {
				res.json(result);
			});
		}
	}
};