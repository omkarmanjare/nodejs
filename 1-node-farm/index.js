const fs = require('fs'); //this way we import required module
const textInput = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textInput);

const textOutput=`This is additional stinrg. ${Date.now()}`;
fs.writeFileSync('./txt/newfile.txt', textOutput); // newfile.txt will get created and text will be added to file

const welcome = "Hello World";
console.log(welcome);