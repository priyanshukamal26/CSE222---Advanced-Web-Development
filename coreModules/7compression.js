// zlib 
// 1. gzip - compression : gunzib - DecompressionStream
// 2. deflate - compression : inflate - decompression
// 3. brotlicompress : brotlidecompress

const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('7input.txt');
const writeStream = fs.createWriteStream('7input.txt.gz')
const gzip = zlib.createGzip();

readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on('finish', () => console.log('File compressed successfully!'));