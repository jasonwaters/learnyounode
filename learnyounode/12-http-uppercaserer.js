var http = require('http');
var map = require('through2-map');

var port = parseInt(process.argv[2]);

var server = http.createServer(function(request, response) {
    if(request.method !== 'POST') {
        return request.end('only POST is supported');
    }

    request.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(port);