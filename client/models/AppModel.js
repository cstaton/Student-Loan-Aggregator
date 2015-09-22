var AppModel = Backbone.Model.extend({
	initialize: function() {
		//collections
		this.set("school", new Schools());
		this.set("state", new States());
		this.set("loan", new Loans());
    //models
		this.set("header", new HeaderModel());
	}
});