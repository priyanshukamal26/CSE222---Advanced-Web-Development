const fs = require("fs");

// Copy content from input.txt to output.txt using streams
const readStream = fs.createReadStream("5streamCode01input.txt");
const writeStream = fs.createWriteStream("5streamCode01output.txt");

readStream.pipe(writeStream);

console.log('File copied usign stream!');