var Schools = Backbone.Collection.extend({
	model: SchoolModel,
	urlRoot: "/schools",
	initialize: function() {
		this.fetch({
			success: function(data) {
				console.log(data);
			},
			error: function(data) {
				console.log(data);
			}
		});
	}
});