var http = require('http');
var fs = require('fs');

var port = parseInt(process.argv[2]);
var filePath = process.argv[3];

var server = http.createServer(function(request, response) {
    var fileStream = fs.createReadStream(filePath);
    fileStream.pipe(response);
});

server.listen(port);