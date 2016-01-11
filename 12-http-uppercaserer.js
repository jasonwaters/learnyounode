var http = require('http');
var map = require('through2-map');

var port = parseInt(process.argv[2]);

var server = http.createServer(function(request, response) {

});

server.listen(port);