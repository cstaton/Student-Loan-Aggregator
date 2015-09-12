var SchoolView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},

	render: function() {
		return this.$el.html("<button>Get Data</button>");
	}
});