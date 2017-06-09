var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('<PATH_TO_FILE>');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var lineCount = 0;

rl.on('line', function(line) {
    lineCount++;
  console.log("LINE NUMBER: " + lineCount + ": " + line);
});

rl.on('close', function() {
  console.log("----------------FINISED READING----------------");
});
