var net = require('net');


function padded(value) {
    if(value < 10) {
        return "0" + value;
    }
    return value.toString();
}



var server = net.createServer(null, function(socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = padded(date.getMonth()+1);
    var day = padded(date.getDate());
    var hours = padded(date.getHours());
    var minutes = padded(date.getMinutes());


    socket.end(`${year}-${month}-${day} ${hours}:${minutes}`);
});

server.listen(parseInt(process.argv[2]));