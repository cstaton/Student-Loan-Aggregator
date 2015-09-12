CREATE DATABASE loans;

USE loans;

CREATE TABLE schools (
	pkey int NOT NULL AUTO_INCREMENT,
	schoolid int NOT NULL,
	name varchar(200) NOT NULL,
	typeschool varchar(32),
	state varchar(2),
	zipcode int NOT NULL,
	PRIMARY KEY (pkey)
);

CREATE TABLE allloans (
	id int NOT NULL AUTO_INCREMENT,
	school int,
	loantype varchar(32),
	recipients int,
	disbursement_num int,
	disbursement_dollar int,
	loans_num int,
	loans_dollar int,
	PRIMARY KEY (id)
);
