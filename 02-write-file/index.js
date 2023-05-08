const fs = require('fs');
const readline = require('node:readline');
const path = require('path');
const {
    stdin: input,
    stdout: output,
} = require('node:process');
const rl = readline.createInterface({ input, output });
const writeableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

console.log('Привет! Введите ваше сообщение или нажмите "ctrl+c" для выхода');

rl.on('line', data =>{
    writeableStream.write(data + '\n');
});

rl.on('SIGINT', () => {
  process.emit('SIGINT');
});

process.on('SIGINT', () =>{
  writeableStream.end();
  console.log('До новых встреч');
  process.exit();
})
