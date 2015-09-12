var AppView = Backbone.View.extend({
	initialize: function() {
		this.headerView = new HeaderView({ model: this.model.get("header")});
		this.schoolView = new SchoolView({ collection: this.model.get("school")});
		this.loanView = new LoanView({ model: this.model.get("loan")});
	},

	className: "container",

	render: function() {
		return this.$el.html([
			this.headerView.$el,
			this.schoolView.$el,
			this.loanView.$el
		]);
	}
});