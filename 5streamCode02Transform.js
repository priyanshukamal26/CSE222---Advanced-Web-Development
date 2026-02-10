const { Transform} = require('stream');
const fs = require('fs');

const upperCase = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

fs.createReadStream('5streamCode01input.txt').pipe(upperCase).pipe(fs.createWriteStream('5streamCode02output.txt'));