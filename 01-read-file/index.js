const fs = require('fs');
const path = require('path');
let filePath = path.join(__dirname, './text.txt');

fs.readFile(filePath, function (err, data) {
  console.log(data.toString());
});
