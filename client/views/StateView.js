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