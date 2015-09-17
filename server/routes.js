var controllers = require('./controllers');
var router = require('express').Router();

// for (var route in controllers) {
// 	router.route("/" + route)
// 	.get(controllers[route].get);
// 	// .post(controllers[route].post);
// }

router.route("/schools")
	.get(controllers.schools.get);

router.route("/loans")
	.get(controllers.loans.get);

router.route("/states")
	.get(controllers.states.get);

module.exports = router;