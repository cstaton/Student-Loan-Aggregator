var AppView = Backbone.View.extend({
	initialize: function() {
		this.headerView = new HeaderView({ model: this.model.get("header")});
		this.schoolView = new SchoolView({ collection: this.model.get("school")});
		this.loanView = new LoanView({ model: this.model.get("loan")});
		this.stateView = new StateView({ collection: this.model.get("state")});
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
var HeaderView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},

	render: function() {
		return this.$el.html("<h1>" + this.model.get("title") + "</h1>");
	}
});
var LoanView = Backbone.View.extend({
	initialize: function(params) {
		this.render();

	},
	render: function() {
		return this.$el.html("<p>Loans Go here</p>");
	}
});
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
var StateView = Backbone.View.extend({

	initialize: function() {
		this.render();
		this.displayMap();			
	},

	className: "chart",

	displayMap: function() {
		var context = this;

		var width = 960,
		    height = 500,
		    centered;

		var projection = d3.geo.albersUsa()
			.scale(1070)
			.translate([width / 2, height / 2]);

		var path = d3.geo.path()
			.projection(projection);

		var svg = d3.select(context.el).append("svg")
		    .attr("width", width)
		    .attr("height", height);

		svg.append("rect")
			.attr("class", "background")
			.attr("width", width)
			.attr("height", height)
			.on("click", clicked);

		var g = svg.append("g");

		d3.json("/assets/us.json", function(error, topology) {
			if (error) throw error;

			// console.log(topology);

			g.append("g")
			  	.attr("id", "states")
			  	.selectAll("path")
			  	.data(topojson.feature(topology, topology.objects.units).features)
			  	.enter().append("path")
			  	.attr("d", path)
			  	.attr("state", function(d) { return d.properties.name;})
			  	.on("click", clicked);

			g.append("path")
				.datum(topojson.mesh(topology, topology.objects.units, function(a, b) { 
					return a !== b; 
				}))
				.attr("id", "states-borders")
				.attr("d", path);
		});
		/*jshint multistr: true */
		var clicked = function(d) {
			var state = $(this).attr("state");

			var results = context.collection.calcAverages(state);

			$(".results").html("<h3>" + state + "</h3>\
								<p>Average Per Recipient: $" + results.average + "</p>");

			var x, y, zoom;

			if (d && centered !== d) {
				var centroid = path.centroid(d);
				x = centroid[0];
				y = centroid[1];
				zoom = 8;
				centered = d;
			} else {
				x = width / 2;
				y = height / 2;
				zoom = 1;
				centered = null;
			}

			g.selectAll("path")
				.classed("active", centered && function(d) { return d === centered; });

			g.transition()
				.duration(750)
				.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + zoom + ")translate(" + -x + "," + -y + ")")
				.style("stroke-width", 1.5 / zoom + "px");
		};
	},

	render: function() {
		return this.$el.html("<h2>State View</h2><div class='results'></div>");
	}
});
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
var States = Backbone.Collection.extend({

	model: StateModel,

	url: "/states",

	initialize: function() {
		this.fetch({
			success: function(data) {
				// console.log(data);
			},
			error: function(err) {
				console.log(err);
			}
		});
	},

	calcAverages: function(state) {
		var context = this;
		var results = {
			totalDollar: 0,
			totalRecipients: 0
		};

		this.map(function(item) {
			if (context.stateHash[state] === item.get("state")) {
				results.totalDollar += item.get("totaldollars");
				results.totalRecipients += item.get("totalrecipients"); 
			}
		});

		results.average = Math.round(results.totalDollar / results.totalRecipients);

		return results;
	},

	stateHash: {
		'Alabama': 'AL',
	    'Alaska': 'AK',
	    'American Samoa': 'AS',
	    'Arizona': 'AZ',
	    'Arkansas': 'AR',
	    'California': 'CA',
	    'Colorado': 'CO',
	    'Connecticut': 'CT',
	    'Delaware': 'DE',
	    'District Of Columbia': 'DC',
	    'Federated States Of Micronesia': 'FM',
	    'Florida': 'FL',
	    'Georgia': 'GA',
	    'Guam': 'GU',
	    'Hawaii': 'HI',
	    'Idaho': 'ID',
	    'Illinois': 'IL',
	    'Indiana': 'IN',
	    'Iowa': 'IA',
	    'Kansas': 'KS',
	    'Kentucky': 'KY',
	    'Louisiana': 'LA',
	    'Maine': 'ME',
	    'Marshall Islands': 'MH',
	    'Maryland': 'MD',
	    'Massachusetts': 'MA',
	    'Michigan': 'MI',
	    'Minnesota': 'MN',
	    'Mississippi': 'MS',
	    'Missouri': 'MO',
	    'Montana': 'MT',
	    'Nebraska': 'NE',
	    'Nevada': 'NV',
	    'New Hampshire': 'NH',
	    'New Jersey': 'NJ',
	    'New Mexico': 'NM',
	    'New York': 'NY',
	    'North Carolina': 'NC',
	    'North Dakota': 'ND',
	    'Northern Mariana Islands': 'MP',
	    'Ohio': 'OH',
	    'Oklahoma': 'OK',
	    'Oregon': 'OR',
	    'Palau': 'PW',
	    'Pennsylvania': 'PA',
	    'Puerto Rico': 'PR',
	    'Rhode Island': 'RI',
	    'South Carolina': 'SC',
	    'South Dakota': 'SD',
	    'Tennessee': 'TN',
	    'Texas': 'TX',
	    'Utah': 'UT',
	    'Vermont': 'VT',
	    'Virgin Islands': 'VI',
	    'Virginia': 'VA',
	    'Washington': 'WA',
	    'West Virginia': 'WV',
	    'Wisconsin': 'WI',
	    'Wyoming': 'WY'
	}
});
var AppModel = Backbone.Model.extend({
	initialize: function() {
		//collections
		this.set("school", new Schools());
		this.set("state", new States());
		//models
		this.set("loan", new LoanModel());
		this.set("header", new HeaderModel());
	}
});
var HeaderModel = Backbone.Model.extend({
	initialize: function() {
		this.set("title", "Student Loan Size for 2nd Quarter 2015");
	}
});
var LoanModel = Backbone.Model.extend({
	
	urlRoot: "/loans",

	initialize: function() {

	}
});
var SchoolModel = Backbone.Model.extend({
	
	urlRoot: "/schools",

	initialize: function() {
		
	}
});
var StateModel = Backbone.Model.extend({

	urlRoot: "/states",

});