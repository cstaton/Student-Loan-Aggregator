var Schools = Backbone.Collection.extend({

	model: SchoolModel,

	url: "/schools",
	
	initialize: function() {
		var context = this;



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