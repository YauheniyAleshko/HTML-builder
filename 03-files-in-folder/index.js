const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, './secret-folder');

fs.readdir(folder,{withFileTypes: true},(err, files) => {
  if(err)
    console.log(err);
  else{
    console.log("\nФайлы текущего каталога:");
    files.forEach(file =>{
      if(file.isFile()){
        //console.log(path.extname(file.name));
        const folderFileName = path.join(__dirname, 'secret-folder', file.name)
        fs.stat( folderFileName,(err, stats) =>{
          if(err)
            console.log(err);
          else{
            const name = file.name.split('.')[0];
            const extension = file.name.split('.')[1];
            const size = stats.size;
            console.log(`${name}-${extension}-${size}`);
          }
          
        })
      }
      
    })
  }
  
})


