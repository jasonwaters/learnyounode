var fs = require('fs');

var file = process.argv[2];


fs.readFile(file, function(err, data) {
	if(!err) {
		var fileContents = data.toString();
		console.log((fileContents.match(/\n/g) || []).length);
	}
});




