var dirlistmodule = require('./dirlistmodule.js');

dirlistmodule(process.argv[2], process.argv[3], function(err, data) {
	if(!err) {
		console.log(data.join('\n'));	
	}
});