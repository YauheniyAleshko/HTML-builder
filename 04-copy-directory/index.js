const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, 'files');
const copyFolder = path.join(__dirname, 'files-copy');

function copyDir(){
  fs.mkdir(copyFolder, { recursive: true }, (err) => {
    if (err) console.log('error', err);
  });

  fs.readdir(folder,{ withFileTypes: true },(err, files) => {
      if (err) 
        console.log('error', err);
      else {
        files.forEach((file) => {
          fs.copyFile(path.join(folder, file.name),path.join(copyFolder, file.name),() => {
              if (err) console.log('error', err);
            }
          );
        });
      }
    }
  );
  console.log('Операция завершена успешно!');
}

copyDir();

  