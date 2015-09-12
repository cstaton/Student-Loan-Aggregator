
// data = data.replace(/[0-9],{1,1}(?=[0-9]{3})/g, function(p) {
// 	return p[0];
// });

var filterInt = function (value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
    	return +value;
	}
  return value;
}

data = data.split(",");


for (var i = 0; i < data.length; i++) {
 	data[i] = filterInt(data[i]);
}


var keysTemp = keys.split(',');




var storage = {};

for (var i = 0; i < data.length; i+= 30) {
	var schoolName = data[i];

	storage[schoolName] = [];

	for (var j = 0; j < 30; j++) {
		storage[schoolName].push(data[i + j]);
	}
}

var count = 0;

var result = {};


for (var key in storage) {


	result[key] = {
		masterData: {},
		DLSub: {},
		DLUnSubUnderGrad: {},
		DLUnSubGrad: {},
		DLParentPlus: {},
		DLGradPlus: {}
	};

	for (var k = 0; k < storage[key].length; k++) {
		if (k <= 4) {
			result[key].masterData[keysTemp[k]] = storage[key][k];
		} else if (k > 4 && k <= 9) {
			result[key].DLSub[keysTemp[k]] = storage[key][k];
		} else if (k > 9 && k <= 14) {
			result[key].DLUnSubUnderGrad[keysTemp[k]] = storage[key][k];
		} else if (k > 14 && k <= 19) {
			result[key].DLUnSubGrad[keysTemp[k]] =  storage[key][k];
		} else if (k > 19 && k <= 24) {
			result[key].DLParentPlus[keysTemp[k]] = storage[key][k];
		} else if (k > 24 && k <= 29) {
			result[key].DLGradPlus[keysTemp[k]] = storage[key][k];
		}
	}
}

for (var hmm in result) {
	if (result[hmm] !== undefined) {
		count++;
	}
}
for (var baby in result[100200].DLSub) {
	console.log(baby);
	console.log(baby.length);
}






