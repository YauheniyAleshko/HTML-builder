const fs = require('fs');
const path = require('path');
const readerStream = fs.createReadStream(path.join(__dirname, './text.txt')); 

readerStream.on('data', function(chunk) {
   console.log(chunk.toString())
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});




