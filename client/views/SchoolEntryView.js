var SchoolEntryView = Backbone.View.extend({

	tagName: 'tr',

	events: {
		"click": "removeMe"
	},

	removeMe: function() {
		console.log(this);
		this.$el.remove();
	},

	template: _.template('<td><%= name %></td><td><%= state %></td>'),

	render: function() {
		return this.$el.html(this.template(this.model.attributes));
	}
});