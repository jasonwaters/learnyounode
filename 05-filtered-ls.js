var fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, list) {
	var filtered = list.filter(function(value) {
		return value.split('.')[1] == ext;
	});

	filtered.forEach(function(value) {
		console.log(value);
	});

});

