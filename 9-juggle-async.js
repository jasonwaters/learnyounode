var http = require('http');

var urls = process.argv.splice(2);

var results = {};

urls.forEach(function(url) {
    http.get(url, function(response) {
        var result = '';

        response.setEncoding('utf8');
        response.on('data', function(data) {
            result += data;
        });

        response.on('end', function(data) {
            results[url] = result;
            if(Object.keys(results).length == urls.length) {
                printResults();
            }
        });
    });
});

function printResults() {
    urls.forEach(function(key) {
       console.log(results[key]);
    });
}
