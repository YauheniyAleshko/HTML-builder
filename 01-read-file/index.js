const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, './text.txt');
const readerStream = fs.createReadStream(filePath); 

readerStream.on('data', function(chunk) {
   console.log(chunk.toString())
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});




