var LoanView = Backbone.View.extend({

	initialize: function(params) {
		this.render();

    this.on('sendSchool', this.displaySchool, this);
    this.collection.on("sync", this.render, this);
	},

  displaySchool: function(school) {
    // var id = school.get("schoolid");
    this.collection.getLoan(school);
  },

	render: function() {
    console.log(this.$el);
    console.log(this.collection);
    this.$el.children().detach();

		return this.$el.html("<p>Loans Go here:</p>")
    .append("<h2>" + this.collection.schoolName + "</h2>")
    .append(
      this.collection.map(function(loan) {
        return new LoanEntryView({ model: loan }).render();
      })
    );
	}
});