var SchoolView = Backbone.View.extend({
	initialize: function() {

		this.render();

		this.on("clickme", function() {
			console.log(this);
		});

		this.collection.on("sync", this.autoblah, this);
	},

	events: {
		"click button": "addSchools",
		"submit form": "findSchool"
	},

	addSchools: function() {

		var data = this.collection;
		this.$el.find("table").append(
			this.collection.map(function(school) {
				return new SchoolEntryView({model: school}).render();
			})
		);
	},

	autoblah: function() {

		var states = this.collection.map(function(item) {
			return item.get("name");
		});


		// var bh = new Bloodhound({
		// 	datumTokenizer: Bloodhound.tokenizers.whitespace,
		// 	queryTokenizer: Bloodhound.tokenizers.whitespace,
		// 	local: states
		// });

		// $("#bloodhound .typeahead").typeahead({
		// 	hint: true,
		// 	highlight: true,
		// 	minLength: 1
		// }, {
		// 	name: "schools",
		// 	source: bh
		// });




		var substringMatcher = function(strs) {
		  return function findMatches(q, cb) {
		    var matches, substringRegex;

		    // an array that will be populated with substring matches
		    matches = [];

		    // regex used to determine if a string contains the substring `q`
		    substrRegex = new RegExp(q, 'i');

		    // iterate through the pool of strings and for any string that
		    // contains the substring `q`, add it to the `matches` array
		    $.each(strs, function(i, str) {
		      if (substrRegex.test(str)) {
		        matches.push(str);
		      }
		    });

		    cb(matches);
		  };
		};
	

		$('#the-basics .typeahead').typeahead({
		  hint: true,
		  highlight: true,
		  minLength: 1
		},
		{
		  name: 'states',
		  source: substringMatcher(states)
		});



	},

	findSchool: function(e) {
		e.preventDefault();

		var school = $('.tt-input').typeahead("val");
		school = school.toUpperCase();
		school = school.trim();


		this.collection.forEach(function(item) {
			var test = item.get("name").trim();

			if (school === test) {

			}
		});

		this.render();
		this.autoblah();
	},
	/*jshint multistr: true */
	render: function() {
		return this.$el.html(
			'<form id="the-basics">\
				<label>School Name: </label>\
				<input type="text" class="typeahead" placeholder="Enter School Here..." />\
				<input type="submit" value="Find School" />\
			</form>');
	}
});