var AppView = Backbone.View.extend({

	initialize: function() {
		this.headerView = new HeaderView({ model: this.model.get("header")});
		this.schoolView = new SchoolView({ collection: this.model.get("school")});
		this.loanView = new LoanView({ collection: this.model.get("loan")});
		this.stateView = new StateView({ collection: this.model.get("state")});

		this.schoolView.on("grabSchool", this.sendSchool, this);
	},

	sendSchool: function(school) {
		this.loanView.trigger('sendSchool', school);
	},

	className: "container",

	render: function() {
		return this.$el.html([
			this.headerView.$el,
			this.stateView.$el,
			this.schoolView.$el,
			this.loanView.$el
		]);
	}
});