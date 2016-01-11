var http = require('http');
var port = parseInt(process.argv[2]);

function handleDateResponse(urlDetails, response) {
    var dateValue = new Date(urlDetails.query.iso);
    var jsonResponse = {};

    switch(urlDetails.pathname) {
        case('/api/parsetime'):
            jsonResponse = {
                'hour': dateValue.getHours(),
                'minute': dateValue.getMinutes(),
                'second': dateValue.getSeconds()
            };
            break;
        case('/api/unixtime'):
            jsonResponse = {
                'unixtime': dateValue.getTime()
            };
            break;
    }

    response.end(JSON.stringify(jsonResponse));
}


var server = http.createServer(function (request, response) {
    var url = require('url');
    if (request.method === "GET") {
        response.writeHead(200, {'Content-Type': 'application/json'});
        handleDateResponse(url.parse(request.url, true), response);
    }
});

server.listen(port);

//test
//http.get(`http://localhost:${port}/api/parsetime?iso=2013-08-10T12:10:15.474Z`, function (res) {
//    console.log(res);
//});