var rawD = require('./rawData');
var connection = require('./db');

module.exports = {
	schools: {
		get: function(callback) {
			var queryStr = "select * from schools;";

			db.query(queryStr, function(err, results) {
				callback(err, results);
			});
		}
	},
	loans: {
		get: function(callback) {
			var queryStr = "select * from allloans;";

			db.query(queryStr, function(err, results) {
				callback(err, results);
			});
		}
	},
	dataInserter: function() {
		rawD.theParser(function(data) {
			for (var key in data) {
				var master = data[key].masterData;
				var dlSub = data[key].DLSub;
				var unsub = data[key].DLUnSubUnderGrad;
				var unsubGrad = data[key].DLUnSubGrad;
				var parent = data[key].DLParentPlus;
				var grad = data[key].DLGradPlus;


				var queryString1 = "INSERT into schools \
				(schoolid, name, typeschool, state, zipcode) \
				VALUES ('" + master["OPE ID"] + "','" + master.School + "','" + master["School Type"] + "','" + master.State + "','" + master["Zip Code"] + "');"

				connection.query(queryString1, function(err, results) {

				});

				var queryString2 = "INSERT into allloans \
				(school, loantype, recipients, disbursement_num, disbursement_dollar, loans_num, loans_dollar) \
				VALUES ('" + master["OPE ID"] + "','DL Subsidized','" + dlSub["Recipients"] + "','" + dlSub["# of Disbursements"] + "','" + dlSub["$ of Disbursements"] + "','" + dlSub["# of Loans Originated"] + "','" + dlSub["$ of Loans Originated"] + "');"

				connection.query(queryString2, function(err, results) {

				});

				var queryString3 = "INSERT into allloans \
				(school, loantype, recipients, disbursement_num, disbursement_dollar, loans_num, loans_dollar) \
				VALUES ('" + master["OPE ID"] + "','DL Unsubsidized - Undergraduate','" + unsub["Recipients"] + "','" + unsub["# of Disbursements"] + "','" + unsub["$ of Disbursements"] + "','" + unsub["# of Loans Originated"] + "','" + unsub["$ of Loans Originated"] + "');"

				connection.query(queryString3, function(err, results) {

				});

				var queryString4 = "INSERT into allloans \
				(school, loantype, recipients, disbursement_num, disbursement_dollar, loans_num, loans_dollar) \
				VALUES ('" + master["OPE ID"] + "','DL Unsubsidized - Graduate','" + unsubGrad["Recipients"] + "','" + unsubGrad["# of Disbursements"] + "','" + unsubGrad["$ of Disbursements"] + "','" + unsubGrad["# of Loans Originated"] + "','" + unsubGrad["$ of Loans Originated"] + "');"

				connection.query(queryString4, function(err, results) {

				});

				var queryString5 = "INSERT into allloans \
				(school, loantype, recipients, disbursement_num, disbursement_dollar, loans_num, loans_dollar) \
				VALUES ('" + master["OPE ID"] + "','DL Parent Plus','" + parent["Recipients"] + "','" + parent["# of Disbursements"] + "','" + parent["$ of Disbursements"] + "','" + parent["# of Loans Originated"] + "','" + parent["$ of Loans Originated"] + "');"

				connection.query(queryString5, function(err, results) {

				});

				var queryString6 = "INSERT into allloans \
				(school, loantype, recipients, disbursement_num, disbursement_dollar, loans_num, loans_dollar) \
				VALUES ('" + master["OPE ID"] + "','DL Grad Plus','" + grad["Recipients"] + "','" + grad["# of Disbursements"] + "','" + grad["$ of Disbursements"] + "','" + grad["# of Loans Originated"] + "','" + grad["$ of Loans Originated"] + "');"

				connection.query(queryString6, function(err, results) {

				});
			}
		});
	}
};



