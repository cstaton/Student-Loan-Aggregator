var LoanEntryView = Backbone.View.extend({

	tagName: 'tr',

	events: {
		"click": "removeMe"
	},

	removeMe: function() {
		console.log(this);
		this.$el.remove();
	},

	template: _.template('<td><%= loantype %></td>\
												<td><%= loans_dollar %></td>\
												<td><%= loans_num %></td>\
												<td><%= disbursement_dollar %></td>\
												<td><%= disbursement_num %></td>'),					

	render: function() {
		return this.$el.html(this.template(this.model.attributes));
	}
});