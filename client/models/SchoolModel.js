var SchoolModel = Backbone.Model.extend({
	initialize: function() {
		this.fetch({
			success: function(data) {
				console.log(data);
			},
			error: function(data) {
				console.log(data);
			}
		});
	},
	urlRoot: "/schools"
});