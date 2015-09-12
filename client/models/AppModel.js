var AppModel = Backbone.Model.extend({
	initialize: function() {
		this.set("header", new HeaderModel());
		this.set("school", new Schools());
		this.set("loan", new LoanModel());
	}
});