var db = require('./orm');

var fs = require('fs');


var totalData = {"0":{"DL Subsidized":{"totalRecipients":93,"totalDollars":357594},"DL Unsubsidized - Undergraduate":{"totalRecipients":98,"totalDollars":340006},"DL Unsubsidized - Graduate":{"totalRecipients":2726,"totalDollars":45841904},"DL Parent Plus":{"totalRecipients":27,"totalDollars":364774},"DL Grad Plus":{"totalRecipients":2680,"totalDollars":90264809}},"AK":{"DL Subsidized":{"totalRecipients":1596,"totalDollars":4674553},"DL Unsubsidized - Undergraduate":{"totalRecipients":1627,"totalDollars":6888965},"DL Unsubsidized - Graduate":{"totalRecipients":109,"totalDollars":702754},"DL Parent Plus":{"totalRecipients":21,"totalDollars":141186},"DL Grad Plus":{"totalRecipients":17,"totalDollars":143122}},"AL":{"DL Subsidized":{"totalRecipients":15331,"totalDollars":41578275},"DL Unsubsidized - Undergraduate":{"totalRecipients":15139,"totalDollars":53670851},"DL Unsubsidized - Graduate":{"totalRecipients":5250,"totalDollars":42662646},"DL Parent Plus":{"totalRecipients":1476,"totalDollars":10801262},"DL Grad Plus":{"totalRecipients":1601,"totalDollars":14121747}},"AR":{"DL Subsidized":{"totalRecipients":4339,"totalDollars":9990769},"DL Unsubsidized - Undergraduate":{"totalRecipients":4711,"totalDollars":12718937},"DL Unsubsidized - Graduate":{"totalRecipients":2376,"totalDollars":16611419},"DL Parent Plus":{"totalRecipients":412,"totalDollars":2139856},"DL Grad Plus":{"totalRecipients":597,"totalDollars":4593810}},"AZ":{"DL Subsidized":{"totalRecipients":66604,"totalDollars":236240787},"DL Unsubsidized - Undergraduate":{"totalRecipients":67548,"totalDollars":321323437},"DL Unsubsidized - Graduate":{"totalRecipients":19759,"totalDollars":257064477},"DL Parent Plus":{"totalRecipients":2811,"totalDollars":21202528},"DL Grad Plus":{"totalRecipients":2007,"totalDollars":23586526}},"CA":{"DL Subsidized":{"totalRecipients":72292,"totalDollars":235697197},"DL Unsubsidized - Undergraduate":{"totalRecipients":68019,"totalDollars":292256365},"DL Unsubsidized - Graduate":{"totalRecipients":25816,"totalDollars":425140981},"DL Parent Plus":{"totalRecipients":5995,"totalDollars":56568769},"DL Grad Plus":{"totalRecipients":12822,"totalDollars":193509507}},"CO":{"DL Subsidized":{"totalRecipients":19808,"totalDollars":61020431},"DL Unsubsidized - Undergraduate":{"totalRecipients":20064,"totalDollars":86521537},"DL Unsubsidized - Graduate":{"totalRecipients":6923,"totalDollars":77462583},"DL Parent Plus":{"totalRecipients":1099,"totalDollars":8029754},"DL Grad Plus":{"totalRecipients":2579,"totalDollars":26820641}},"CT":{"DL Subsidized":{"totalRecipients":9306,"totalDollars":26108043},"DL Unsubsidized - Undergraduate":{"totalRecipients":9601,"totalDollars":34677191},"DL Unsubsidized - Graduate":{"totalRecipients":2051,"totalDollars":23384276},"DL Parent Plus":{"totalRecipients":928,"totalDollars":5929251},"DL Grad Plus":{"totalRecipients":454,"totalDollars":4994149}},"DC":{"DL Subsidized":{"totalRecipients":7962,"totalDollars":28793694},"DL Unsubsidized - Undergraduate":{"totalRecipients":8121,"totalDollars":44083932},"DL Unsubsidized - Graduate":{"totalRecipients":6059,"totalDollars":90446128},"DL Parent Plus":{"totalRecipients":223,"totalDollars":2679563},"DL Grad Plus":{"totalRecipients":1768,"totalDollars":20960515}},"DE":{"DL Subsidized":{"totalRecipients":996,"totalDollars":2677050},"DL Unsubsidized - Undergraduate":{"totalRecipients":988,"totalDollars":3165703},"DL Unsubsidized - Graduate":{"totalRecipients":305,"totalDollars":2430440},"DL Parent Plus":{"totalRecipients":108,"totalDollars":867999},"DL Grad Plus":{"totalRecipients":42,"totalDollars":476249}},"FL":{"DL Subsidized":{"totalRecipients":78885,"totalDollars":221142554},"DL Unsubsidized - Undergraduate":{"totalRecipients":70824,"totalDollars":247603190},"DL Unsubsidized - Graduate":{"totalRecipients":26954,"totalDollars":273150827},"DL Parent Plus":{"totalRecipients":3678,"totalDollars":36154207},"DL Grad Plus":{"totalRecipients":6508,"totalDollars":66513395}},"GA":{"DL Subsidized":{"totalRecipients":27322,"totalDollars":68224452},"DL Unsubsidized - Undergraduate":{"totalRecipients":26523,"totalDollars":87304311},"DL Unsubsidized - Graduate":{"totalRecipients":10024,"totalDollars":100403959},"DL Parent Plus":{"totalRecipients":3117,"totalDollars":22367648},"DL Grad Plus":{"totalRecipients":3396,"totalDollars":31647164}},"GU":{"DL Subsidized":{"totalRecipients":99,"totalDollars":361475},"DL Unsubsidized - Undergraduate":{"totalRecipients":50,"totalDollars":184148},"DL Unsubsidized - Graduate":{"totalRecipients":10,"totalDollars":113616},"DL Parent Plus":{"totalRecipients":0,"totalDollars":0},"DL Grad Plus":{"totalRecipients":0,"totalDollars":0}},"HI":{"DL Subsidized":{"totalRecipients":602,"totalDollars":1673821},"DL Unsubsidized - Undergraduate":{"totalRecipients":503,"totalDollars":1656270},"DL Unsubsidized - Graduate":{"totalRecipients":125,"totalDollars":742702},"DL Parent Plus":{"totalRecipients":94,"totalDollars":561998},"DL Grad Plus":{"totalRecipients":113,"totalDollars":844079}},"IA":{"DL Subsidized":{"totalRecipients":21724,"totalDollars":65467556},"DL Unsubsidized - Undergraduate":{"totalRecipients":22440,"totalDollars":97659968},"DL Unsubsidized - Graduate":{"totalRecipients":7039,"totalDollars":78356868},"DL Parent Plus":{"totalRecipients":858,"totalDollars":4944051},"DL Grad Plus":{"totalRecipients":628,"totalDollars":4533314}},"ID":{"DL Subsidized":{"totalRecipients":3043,"totalDollars":7874761},"DL Unsubsidized - Undergraduate":{"totalRecipients":2595,"totalDollars":8335923},"DL Unsubsidized - Graduate":{"totalRecipients":556,"totalDollars":3722411},"DL Parent Plus":{"totalRecipients":111,"totalDollars":681004},"DL Grad Plus":{"totalRecipients":150,"totalDollars":1266193}},"IL":{"DL Subsidized":{"totalRecipients":38817,"totalDollars":117230053},"DL Unsubsidized - Undergraduate":{"totalRecipients":40723,"totalDollars":155442630},"DL Unsubsidized - Graduate":{"totalRecipients":21997,"totalDollars":297994485},"DL Parent Plus":{"totalRecipients":2536,"totalDollars":18791583},"DL Grad Plus":{"totalRecipients":7372,"totalDollars":150674445}},"IN":{"DL Subsidized":{"totalRecipients":34687,"totalDollars":100676445},"DL Unsubsidized - Undergraduate":{"totalRecipients":32690,"totalDollars":127343142},"DL Unsubsidized - Graduate":{"totalRecipients":5857,"totalDollars":45310944},"DL Parent Plus":{"totalRecipients":2912,"totalDollars":21561549},"DL Grad Plus":{"totalRecipients":1569,"totalDollars":14898053}},"KS":{"DL Subsidized":{"totalRecipients":9706,"totalDollars":24098236},"DL Unsubsidized - Undergraduate":{"totalRecipients":9245,"totalDollars":31207386},"DL Unsubsidized - Graduate":{"totalRecipients":3875,"totalDollars":38874132},"DL Parent Plus":{"totalRecipients":477,"totalDollars":2560483},"DL Grad Plus":{"totalRecipients":579,"totalDollars":4648657}},"KY":{"DL Subsidized":{"totalRecipients":7943,"totalDollars":21428674},"DL Unsubsidized - Undergraduate":{"totalRecipients":8106,"totalDollars":27443664},"DL Unsubsidized - Graduate":{"totalRecipients":4184,"totalDollars":33363585},"DL Parent Plus":{"totalRecipients":624,"totalDollars":3727865},"DL Grad Plus":{"totalRecipients":1066,"totalDollars":9761197}},"LA":{"DL Subsidized":{"totalRecipients":8908,"totalDollars":23549098},"DL Unsubsidized - Undergraduate":{"totalRecipients":8725,"totalDollars":28164790},"DL Unsubsidized - Graduate":{"totalRecipients":2995,"totalDollars":40610022},"DL Parent Plus":{"totalRecipients":719,"totalDollars":6066652},"DL Grad Plus":{"totalRecipients":860,"totalDollars":9905307}},"MA":{"DL Subsidized":{"totalRecipients":6795,"totalDollars":19209145},"DL Unsubsidized - Undergraduate":{"totalRecipients":6756,"totalDollars":22315083},"DL Unsubsidized - Graduate":{"totalRecipients":6940,"totalDollars":104291306},"DL Parent Plus":{"totalRecipients":940,"totalDollars":9154970},"DL Grad Plus":{"totalRecipients":2067,"totalDollars":34156152}},"MD":{"DL Subsidized":{"totalRecipients":6521,"totalDollars":18676859},"DL Unsubsidized - Undergraduate":{"totalRecipients":6595,"totalDollars":24757572},"DL Unsubsidized - Graduate":{"totalRecipients":3326,"totalDollars":43751196},"DL Parent Plus":{"totalRecipients":518,"totalDollars":3264847},"DL Grad Plus":{"totalRecipients":1103,"totalDollars":16222734}},"ME":{"DL Subsidized":{"totalRecipients":2407,"totalDollars":7127236},"DL Unsubsidized - Undergraduate":{"totalRecipients":2348,"totalDollars":8659142},"DL Unsubsidized - Graduate":{"totalRecipients":2094,"totalDollars":30010753},"DL Parent Plus":{"totalRecipients":175,"totalDollars":1015259},"DL Grad Plus":{"totalRecipients":675,"totalDollars":6275606}},"MI":{"DL Subsidized":{"totalRecipients":28669,"totalDollars":71019900},"DL Unsubsidized - Undergraduate":{"totalRecipients":26399,"totalDollars":76909926},"DL Unsubsidized - Graduate":{"totalRecipients":11017,"totalDollars":100792060},"DL Parent Plus":{"totalRecipients":2867,"totalDollars":16301471},"DL Grad Plus":{"totalRecipients":3545,"totalDollars":31852135}},"MN":{"DL Subsidized":{"totalRecipients":20195,"totalDollars":54242890},"DL Unsubsidized - Undergraduate":{"totalRecipients":20682,"totalDollars":69664526},"DL Unsubsidized - Graduate":{"totalRecipients":21610,"totalDollars":248790595},"DL Parent Plus":{"totalRecipients":1128,"totalDollars":6748253},"DL Grad Plus":{"totalRecipients":3552,"totalDollars":54061200}},"MO":{"DL Subsidized":{"totalRecipients":13458,"totalDollars":34557649},"DL Unsubsidized - Undergraduate":{"totalRecipients":13081,"totalDollars":41900849},"DL Unsubsidized - Graduate":{"totalRecipients":11569,"totalDollars":90218088},"DL Parent Plus":{"totalRecipients":1125,"totalDollars":6265126},"DL Grad Plus":{"totalRecipients":2295,"totalDollars":19336495}},"MS":{"DL Subsidized":{"totalRecipients":4405,"totalDollars":10280983},"DL Unsubsidized - Undergraduate":{"totalRecipients":4017,"totalDollars":10640595},"DL Unsubsidized - Graduate":{"totalRecipients":2328,"totalDollars":26564328},"DL Parent Plus":{"totalRecipients":453,"totalDollars":2491334},"DL Grad Plus":{"totalRecipients":586,"totalDollars":8184140}},"MT":{"DL Subsidized":{"totalRecipients":924,"totalDollars":2311732},"DL Unsubsidized - Undergraduate":{"totalRecipients":902,"totalDollars":2641453},"DL Unsubsidized - Graduate":{"totalRecipients":322,"totalDollars":2013140},"DL Parent Plus":{"totalRecipients":99,"totalDollars":667791},"DL Grad Plus":{"totalRecipients":135,"totalDollars":1455803}},"NC":{"DL Subsidized":{"totalRecipients":12245,"totalDollars":27018622},"DL Unsubsidized - Undergraduate":{"totalRecipients":11878,"totalDollars":30668667},"DL Unsubsidized - Graduate":{"totalRecipients":4775,"totalDollars":33267373},"DL Parent Plus":{"totalRecipients":1781,"totalDollars":8807641},"DL Grad Plus":{"totalRecipients":2433,"totalDollars":26728580}},"ND":{"DL Subsidized":{"totalRecipients":947,"totalDollars":2040649},"DL Unsubsidized - Undergraduate":{"totalRecipients":913,"totalDollars":2271224},"DL Unsubsidized - Graduate":{"totalRecipients":688,"totalDollars":4414981},"DL Parent Plus":{"totalRecipients":49,"totalDollars":302963},"DL Grad Plus":{"totalRecipients":82,"totalDollars":673734}},"NE":{"DL Subsidized":{"totalRecipients":3562,"totalDollars":9143792},"DL Unsubsidized - Undergraduate":{"totalRecipients":3248,"totalDollars":10217670},"DL Unsubsidized - Graduate":{"totalRecipients":2943,"totalDollars":39142194},"DL Parent Plus":{"totalRecipients":346,"totalDollars":1807253},"DL Grad Plus":{"totalRecipients":792,"totalDollars":23227191}},"NH":{"DL Subsidized":{"totalRecipients":6531,"totalDollars":7145522},"DL Unsubsidized - Undergraduate":{"totalRecipients":6915,"totalDollars":10980373},"DL Unsubsidized - Graduate":{"totalRecipients":2409,"totalDollars":13601855},"DL Parent Plus":{"totalRecipients":130,"totalDollars":1049780},"DL Grad Plus":{"totalRecipients":182,"totalDollars":2640381}},"NJ":{"DL Subsidized":{"totalRecipients":8860,"totalDollars":22261039},"DL Unsubsidized - Undergraduate":{"totalRecipients":8961,"totalDollars":28068741},"DL Unsubsidized - Graduate":{"totalRecipients":1674,"totalDollars":34213790},"DL Parent Plus":{"totalRecipients":988,"totalDollars":5290071},"DL Grad Plus":{"totalRecipients":749,"totalDollars":10047107}},"NM":{"DL Subsidized":{"totalRecipients":2419,"totalDollars":5813016},"DL Unsubsidized - Undergraduate":{"totalRecipients":2143,"totalDollars":6064291},"DL Unsubsidized - Graduate":{"totalRecipients":1114,"totalDollars":6272322},"DL Parent Plus":{"totalRecipients":59,"totalDollars":318247},"DL Grad Plus":{"totalRecipients":195,"totalDollars":1289544}},"NV":{"DL Subsidized":{"totalRecipients":2639,"totalDollars":7373746},"DL Unsubsidized - Undergraduate":{"totalRecipients":2421,"totalDollars":8278809},"DL Unsubsidized - Graduate":{"totalRecipients":564,"totalDollars":10717193},"DL Parent Plus":{"totalRecipients":123,"totalDollars":974208},"DL Grad Plus":{"totalRecipients":372,"totalDollars":9143309}},"NY":{"DL Subsidized":{"totalRecipients":33132,"totalDollars":96492698},"DL Unsubsidized - Undergraduate":{"totalRecipients":31132,"totalDollars":104272343},"DL Unsubsidized - Graduate":{"totalRecipients":12553,"totalDollars":192039577},"DL Parent Plus":{"totalRecipients":3470,"totalDollars":33995196},"DL Grad Plus":{"totalRecipients":5581,"totalDollars":82459559}},"OH":{"DL Subsidized":{"totalRecipients":35293,"totalDollars":100608393},"DL Unsubsidized - Undergraduate":{"totalRecipients":33322,"totalDollars":118877491},"DL Unsubsidized - Graduate":{"totalRecipients":12323,"totalDollars":192913333},"DL Parent Plus":{"totalRecipients":2182,"totalDollars":19006413},"DL Grad Plus":{"totalRecipients":3697,"totalDollars":49427281}},"OK":{"DL Subsidized":{"totalRecipients":7422,"totalDollars":18536748},"DL Unsubsidized - Undergraduate":{"totalRecipients":7174,"totalDollars":23592947},"DL Unsubsidized - Graduate":{"totalRecipients":2636,"totalDollars":31559499},"DL Parent Plus":{"totalRecipients":665,"totalDollars":4782985},"DL Grad Plus":{"totalRecipients":690,"totalDollars":13340979}},"OR":{"DL Subsidized":{"totalRecipients":16332,"totalDollars":53157705},"DL Unsubsidized - Undergraduate":{"totalRecipients":14203,"totalDollars":59086253},"DL Unsubsidized - Graduate":{"totalRecipients":5734,"totalDollars":81608013},"DL Parent Plus":{"totalRecipients":675,"totalDollars":6025435},"DL Grad Plus":{"totalRecipients":1819,"totalDollars":25778428}},"PA":{"DL Subsidized":{"totalRecipients":25484,"totalDollars":72915759},"DL Unsubsidized - Undergraduate":{"totalRecipients":26025,"totalDollars":92822117},"DL Unsubsidized - Graduate":{"totalRecipients":13562,"totalDollars":270101085},"DL Parent Plus":{"totalRecipients":3504,"totalDollars":27262813},"DL Grad Plus":{"totalRecipients":5238,"totalDollars":91512694}},"PR":{"DL Subsidized":{"totalRecipients":7632,"totalDollars":16363024},"DL Unsubsidized - Undergraduate":{"totalRecipients":3811,"totalDollars":9898902},"DL Unsubsidized - Graduate":{"totalRecipients":3336,"totalDollars":20665942},"DL Parent Plus":{"totalRecipients":66,"totalDollars":227489},"DL Grad Plus":{"totalRecipients":564,"totalDollars":3877699}},"RI":{"DL Subsidized":{"totalRecipients":1574,"totalDollars":4064274},"DL Unsubsidized - Undergraduate":{"totalRecipients":1511,"totalDollars":4226190},"DL Unsubsidized - Graduate":{"totalRecipients":550,"totalDollars":7688058},"DL Parent Plus":{"totalRecipients":211,"totalDollars":1578344},"DL Grad Plus":{"totalRecipients":149,"totalDollars":1833985}},"SC":{"DL Subsidized":{"totalRecipients":6982,"totalDollars":15065966},"DL Unsubsidized - Undergraduate":{"totalRecipients":6934,"totalDollars":17289457},"DL Unsubsidized - Graduate":{"totalRecipients":2796,"totalDollars":33652898},"DL Parent Plus":{"totalRecipients":964,"totalDollars":6144196},"DL Grad Plus":{"totalRecipients":1239,"totalDollars":21516635}},"SD":{"DL Subsidized":{"totalRecipients":3988,"totalDollars":12062711},"DL Unsubsidized - Undergraduate":{"totalRecipients":3891,"totalDollars":15977378},"DL Unsubsidized - Graduate":{"totalRecipients":918,"totalDollars":10468663},"DL Parent Plus":{"totalRecipients":76,"totalDollars":342516},"DL Grad Plus":{"totalRecipients":42,"totalDollars":415716}},"TN":{"DL Subsidized":{"totalRecipients":12272,"totalDollars":32462273},"DL Unsubsidized - Undergraduate":{"totalRecipients":12161,"totalDollars":42510652},"DL Unsubsidized - Graduate":{"totalRecipients":5160,"totalDollars":73658104},"DL Parent Plus":{"totalRecipients":1049,"totalDollars":6506443},"DL Grad Plus":{"totalRecipients":2053,"totalDollars":31083020}},"TX":{"DL Subsidized":{"totalRecipients":44241,"totalDollars":113149148},"DL Unsubsidized - Undergraduate":{"totalRecipients":42958,"totalDollars":140383477},"DL Unsubsidized - Graduate":{"totalRecipients":21028,"totalDollars":212000875},"DL Parent Plus":{"totalRecipients":4944,"totalDollars":30580243},"DL Grad Plus":{"totalRecipients":3605,"totalDollars":41141147}},"UT":{"DL Subsidized":{"totalRecipients":16320,"totalDollars":51238744},"DL Unsubsidized - Undergraduate":{"totalRecipients":16083,"totalDollars":67198614},"DL Unsubsidized - Graduate":{"totalRecipients":3965,"totalDollars":32040107},"DL Parent Plus":{"totalRecipients":247,"totalDollars":2488234},"DL Grad Plus":{"totalRecipients":510,"totalDollars":5428739}},"VA":{"DL Subsidized":{"totalRecipients":18356,"totalDollars":56706242},"DL Unsubsidized - Undergraduate":{"totalRecipients":18032,"totalDollars":69783779},"DL Unsubsidized - Graduate":{"totalRecipients":7638,"totalDollars":85010683},"DL Parent Plus":{"totalRecipients":1304,"totalDollars":8420952},"DL Grad Plus":{"totalRecipients":1501,"totalDollars":13096819}},"VI":{"DL Subsidized":{"totalRecipients":38,"totalDollars":85231},"DL Unsubsidized - Undergraduate":{"totalRecipients":28,"totalDollars":56685},"DL Unsubsidized - Graduate":{"totalRecipients":12,"totalDollars":49340},"DL Parent Plus":{"totalRecipients":1,"totalDollars":2612},"DL Grad Plus":{"totalRecipients":0,"totalDollars":0}},"VT":{"DL Subsidized":{"totalRecipients":740,"totalDollars":2235439},"DL Unsubsidized - Undergraduate":{"totalRecipients":742,"totalDollars":2620966},"DL Unsubsidized - Graduate":{"totalRecipients":1014,"totalDollars":12406095},"DL Parent Plus":{"totalRecipients":145,"totalDollars":1239305},"DL Grad Plus":{"totalRecipients":381,"totalDollars":5409612}},"WA":{"DL Subsidized":{"totalRecipients":9499,"totalDollars":24331830},"DL Unsubsidized - Undergraduate":{"totalRecipients":8174,"totalDollars":23363258},"DL Unsubsidized - Graduate":{"totalRecipients":2782,"totalDollars":40984716},"DL Parent Plus":{"totalRecipients":883,"totalDollars":5439644},"DL Grad Plus":{"totalRecipients":1276,"totalDollars":17447988}},"WI":{"DL Subsidized":{"totalRecipients":11947,"totalDollars":33577609},"DL Unsubsidized - Undergraduate":{"totalRecipients":11947,"totalDollars":37587279},"DL Unsubsidized - Graduate":{"totalRecipients":3712,"totalDollars":38217814},"DL Parent Plus":{"totalRecipients":517,"totalDollars":2987953},"DL Grad Plus":{"totalRecipients":694,"totalDollars":7167086}},"WV":{"DL Subsidized":{"totalRecipients":7833,"totalDollars":23833139},"DL Unsubsidized - Undergraduate":{"totalRecipients":8019,"totalDollars":30919987},"DL Unsubsidized - Graduate":{"totalRecipients":3306,"totalDollars":34385606},"DL Parent Plus":{"totalRecipients":456,"totalDollars":2963983},"DL Grad Plus":{"totalRecipients":736,"totalDollars":11221404}},"WY":{"DL Subsidized":{"totalRecipients":950,"totalDollars":1679552},"DL Unsubsidized - Undergraduate":{"totalRecipients":947,"totalDollars":1878700},"DL Unsubsidized - Graduate":{"totalRecipients":156,"totalDollars":1084251},"DL Parent Plus":{"totalRecipients":270,"totalDollars":2173168},"DL Grad Plus":{"totalRecipients":6,"totalDollars":58571}}};


for (var key in totalData) {
	var state = totalData[key];

	for (var loanType in state) {
		var loan = state[loanType];

		db.StateTotal.create({
			state: key,
			loantype: loanType,
			totalrecipients: loan.totalRecipients,
			totaldollars: loan.totalDollars
		}).then(function(res) {
			console.log(res);
			console.log("saved");
		});
	}
}







var appendIt = function(data) {
	data = JSON.stringify(data);
	fs.appendFile("output.js", data, function(err) {
		console.log("data Saved!!!");
	});
};

// var avg = {"0":{},"AK":{},"AL":{},"AR":{},"AZ":{},"CA":{},"CO":{},"CT":{},"DC":{},"DE":{},"FL":{},"GA":{},"GU":{},"HI":{},"IA":{},"ID":{},"IL":{},"IN":{},"KS":{},"KY":{},"LA":{},"MA":{},"MD":{},"ME":{},"MI":{},"MN":{},"MO":{},"MS":{},"MT":{},"NC":{},"ND":{},"NE":{},"NH":{},"NJ":{},"NM":{},"NV":{},"NY":{},"OH":{},"OK":{},"OR":{},"PA":{},"PR":{},"RI":{},"SC":{},"SD":{},"TN":{},"TX":{},"UT":{},"VA":{},"VI":{},"VT":{},"WA":{},"WI":{},"WV":{},"WY":{}};


// var loans = ['DL Subsidized', 'DL Unsubsidized - Undergraduate','DL Unsubsidized - Graduate','DL Parent Plus','DL Grad Plus'];

// db.Schools.findAll({ 
// 	include: [{
// 		model: db.Allloans,
// 		required: true
// 		}] 
// 	})
// 	.then(function(results) {
// 		for (var key in avg) {
// 			for (var a = 0; a < loans.length; a++) {
// 				avg[key][loans[a]] = {
// 					totalRecipients: 0,
// 					totalDollars: 0,
// 				};
// 			}
// 		}


// 		for (var i = 0; i < results.length; i++) {
// 			var school = results[i];

// 			school.Allloans.forEach(function(loan) {

// 				var loanType = loan.loantype;

// 				avg[school.state][loanType].totalRecipients += loan.recipients;

// 				avg[school.state][loanType].totalDollars += loan.loans_dollar;

				
// 			});

// 		}

// 		appendIt(avg);
		
// 	});












