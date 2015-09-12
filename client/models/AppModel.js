var AppModel = Backbone.Model.extend({
	initialize: function() {
		this.set("header", new HeaderModel());
		this.set("school", new SchoolModel());
		// this.set("loan", new LoanModel());
	}
});