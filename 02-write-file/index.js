const fs = require('fs');
const readline = require('node:readline');
const path = require('path');
const {
    stdin: input,
    stdout: output,
} = require('node:process');
const rl = readline.createInterface({ input, output });
const writeableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

console.log('Привет! Введите ваше сообщение или нажмите "exit" для выхода');

rl.on('line', data =>{
  if(data.toLowerCase() === 'exit'){
    console.log('До новых встреч!')
    process.exit();
  }
    writeableStream.write(data + '\n');
});

process.on('SIGINT', () =>{
  writeableStream.end();
  console.log('До новых встреч!');
  process.exit();
})
