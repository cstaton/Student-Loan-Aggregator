var SchoolView = Backbone.View.extend({
	initialize: function() {
		this.render();

		this.on("clickme", function() {
			console.log(this);
		});
	},

	events: {
		"click button": "addSchools"
	},

	addSchools: function() {

		var data = this.collection;
		this.$el.find("table").append(
			this.collection.map(function(school) {
				return new SchoolEntryView({model: school}).render();
			})
		);
	},

	render: function() {
		return this.$el.html("<button>Get Data</button><table></table>");
	}
});