var fs = require('fs');

var file = process.argv[2];
var fileBuffer = fs.readFileSync(file);
var fileContents = fileBuffer.toString();

console.log((fileContents.match(/\n/g) || []).length);