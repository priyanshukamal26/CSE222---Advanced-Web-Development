// performing file systemm operatiionss on large files - TBs / Video streaming
// reading data in the form of chunks, wont wanit for complete file to load'

// types - readable strams, writable streams, duplex streams, transformable streams
//  reading file
//  writing to a file
//  first reading, then writing
//  convert data to lowercase, uppercase, file to zip, file to normal

// var fs = require('fs')
// var data = ""
// var reader = fs.createReadStream('7revision.txt')
// // var reader = fs.createReadStream('7writeStream.txt') // DUPLEX STREAM - can read and write both. Can be used for file compression, encryption, etc. Transform stream is a type of duplex stream that can modify the data as it is being read or written. For example, you can use a transform stream to convert data to uppercase or lowercase as it is being read from a file or written to a file.

// // to apply encoding on reader variable
// reader.setEncoding('utf-8')

// // on, addListener and once. 3 ways to register or listen to an event.
// reader.on('data', (chunk) => {
//     // data = chunk - DON'T DO THIS. KEEPS OVERWRITING THE SAME THING..
//     data = data + chunk
// })

// reader.on('end', () => {
//     console.log(data)
// })


// var data = "jvnslvnv vnsvs;d opkkv' vmama"
// var writer = fs.createWriteStream('7revisionWrite.txt')
// writer.write(data, () => {
//     console.log("writign done")
// })
// writer.end() // to end the stream, otherwise it will keep waiting for more data to write    
// writer.on('finish', () => {
//     console.log("flushed out the memory")
// })
// writer.on('error', (err) => {
//     console.log(err)
// })



// // Run on server
// var fs = require('fs');
// var http = require('http');

// http.createServer((req, res) => {
//     var data = "jvnslvnv vnsvs;d opkkv' vmama"
//     var writer = fs.createWriteStream('7revisionWrite.txt')
//     writer.write(data, () => {
//         console.log("writing done")
//     })
//     writer.end() // to end the stream, otherwise it will keep waiting for more data to write    
//     writer.on('finish', () => {
//         console.log("flushed out the memory")
//     })
//     writer.on('error', (err) => {
//         console.log(err)
//         res.end(err)
//     })
//     res.end("File written successfully")
// }).listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// })



// // transferring the data from file to another file = copying

// var fs = require('fs')
// var reader = fs.createReadStream("7revision.txt");
// var writer = fs.createWriteStream("7abccopy.txt")
// reader.pipe(writer) // transfer the data
// reader.unpipe(writer) // creates an empty file

// Compression and Decompression using streams

// Compression
// var zlib = require('zlib')
// var fs = require('fs')
// var reader = fs.createReadStream("7revision.txt");
// var writer = fs.createWriteStream("7revision.txt.gz")
// var gzip = zlib.createGzip();
// reader.pipe(gzip).pipe(writer);

// Decompression
// var zlib = require('zlib')
// var fs = require('fs')
// var reader = fs.createReadStream("7revision.txt.gz");
// var writer = fs.createWriteStream("7revisionDecompressed.txt")
// var gzip = zlib.createGunzip();
// reader.pipe(gzip).pipe(writer);



// BROTLI

// COMPRESSION
// var zlib = require('zlib')
// var fs = require('fs')
// var reader = fs.createReadStream("7revision.txt");
// var writer = fs.createWriteStream("7revisionBrotli.txt.gz")
// var gzip = zlib.createBrotliCompress();
// reader.pipe(gzip).pipe(writer);

// DECOMPRESSION
// var zlib = require('zlib')
// var fs = require('fs')
// var reader = fs.createReadStream("7revisionBrotli.txt.gz");
// var writer = fs.createWriteStream("7revisionBrotliDecompress.txt")
// var gzip = zlib.createBrotliDecompress();
// reader.pipe(gzip).pipe(writer);


// CreateDeflate - CreateInflate

// COMPRESSION
// var zlib = require('zlib')
// var fs = require('fs')
// var reader = fs.createReadStream("7revision.txt");
// var writer = fs.createWriteStream("7revisionDeflate.txt.gz")
// var gzip = zlib.createDeflate();
// reader.pipe(gzip).pipe(writer);

// DECOMPRESSION
// var zlib = require('zlib')
// var fs = require('fs')
// var reader = fs.createReadStream("7revisionDeflate.txt.gz");
// var writer = fs.createWriteStream("7revisionDeflateDecompress.txt")
// var gzip = zlib.createInflate();
// reader.pipe(gzip).pipe(writer);