var Sequelize = require('sequelize');
var orm = new Sequelize("loans", "root", "", {
	host: 'localhost',
	dialect: 'mysql',
	define: {
		timestamps: false
	}
});

var Schools = orm.define("Schools", {
	pkey: { type: Sequelize.INTEGER },
	schoolid: { 
		type: Sequelize.INTEGER, 
		primaryKey: true
	}, 
	name: Sequelize.STRING,
	typeschool: Sequelize.STRING,
	state: Sequelize.STRING(2),
	zipcode: Sequelize.INTEGER
});

var Allloans = orm.define("Allloans", {
	school: {
		type: Sequelize.INTEGER, 
		// references: {
		// 	model: 'Schools',
		// 	key: 'schoolid'
		// } 
	},
	loantype: Sequelize.STRING,
	recipients: Sequelize.INTEGER,
	disbursement_num: Sequelize.INTEGER,
	disbursement_dollar: Sequelize.INTEGER,
	loans_num: Sequelize.INTEGER,
	loans_dollar: Sequelize.INTEGER,
});

var StateTotal = orm.define("StateTotal", {
	state: Sequelize.STRING(2),
	loantype: Sequelize.STRING,
	totalrecipients: Sequelize.INTEGER,
	totaldollars: Sequelize.INTEGER
});

Schools.hasMany(Allloans, {foreignKey: 'school'});
Allloans.belongsTo(Schools, {foreignKey: 'schoolid'})

Allloans.removeAttribute('schoolid')

Schools.sync();	
Allloans.sync();
StateTotal.sync();

exports.Schools = Schools;
exports.Allloans = Allloans;
exports.StateTotal = StateTotal;

