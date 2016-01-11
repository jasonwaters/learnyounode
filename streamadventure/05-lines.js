var through = require('through2');
var split = require('split');

var i = 1;

function isOdd(value) {
    return value & 1;
}

process.stdin
    .pipe(split())
    .pipe(through(function(buffer, encoding, next) {

        if(isOdd(i)) {
            this.push(buffer.toString().toLowerCase());
        }else {
            this.push(buffer.toString().toUpperCase());
        }

        this.push('\n');

        i++;
        next();

    }))
    .pipe(process.stdout);