var AppModel = Backbone.Model.extend({
	initialize: function() {
		//collections
		this.set("school", new Schools());
		this.set("state", new States());
		//models
		this.set("loan", new LoanModel());
		this.set("header", new HeaderModel());
	}
});