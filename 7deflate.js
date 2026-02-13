const fs = require('fs');
const zlib = require('zlib');

// const compressStream = fs.createReadStream("7input.txt")
// .pipe(zlib.createDeflate());

// const deflateFile = compressStream.pipe(deflateFile);

// deflateFile.on('finish', () => console.log('compression finished'));

// const decompressStream = deepStrictEqual.createReadStream('7input.txt.deflate')
// .pipe(zlib.createInflate())
// .pipe(fs.createWriteStream('7deflated.txt'));


const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('input.txt.deflate');
const deflate = zlib.createDeflate();

readStream
.pipe(deflate)
.pipe(writeStream)
.on('finish', () => 'compression finished!');

const decompressStream = fs.createReadStream('input.txt.deflate')
.pipe(zlib.createInflate())
.pipe(fs.createWriteStream('output.txt'));

decompressStream.on('finish', () => {
    console.log('Decompression finished! File restored as output.txt');
});

decompressStream.on('error', (err) => {
    console.error('Decompression error:', err);
});
