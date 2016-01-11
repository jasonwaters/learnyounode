var fs = require('fs');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {

		if(!err) {
			var filtered = list.filter(function(value) {
				return value.split('.')[1] == ext;
			});

			callback(false, filtered);			
		}else {
			callback(err, undefined);
		}
	});	
}