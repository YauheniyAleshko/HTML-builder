const fs = require('fs');
const path = require('path');
const fsPromise = require('fs/promises');

const styles = path.join(__dirname, './styles');
const bundleStyles = path.join(__dirname, './project-dist/bundle.css')

const writer = fs.createWriteStream(bundleStyles);

async function bunbleCss(){
  try {
    const files = await fsPromise.readdir(styles);
    for (const file of files){
      const fileName = path.join(styles, file);
      if(path.extname(fileName) === '.css'){
        const reader = fs.createReadStream(fileName);
        reader.on('data', function (chunk) {
          writer.write(chunk.toString());
      });
      }
    }
  } catch (err) {
    console.log(err);
  }
}

bunbleCss();



