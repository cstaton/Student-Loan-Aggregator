var LoanView = Backbone.View.extend({
	initialize: function(params) {
		this.render();

	},
	render: function() {
		return this.$el.html("<p>Loans Go here</p>");
	}
})