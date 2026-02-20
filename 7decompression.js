const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('7input.txt.gz');
const writeStream = fs.createWriteStream('7decompressed.txt')
const gunzip = zlib.createGunzip();

readStream
    .pipe(gunzip)
    .pipe(writeStream)
    .on('finish', () => console.log('File decompressed successfully!'));
