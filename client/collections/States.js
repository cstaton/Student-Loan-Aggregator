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