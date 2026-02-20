// synchronous
var fs = require("fs")

// var data = fs.readFileSync('7revision.txt', 'utf-8')
// console.log(data)
// console.log("sync reading completed")

// // asynchronous
// // not wasting time waiting for file to open - exevutes next lines
// console.log("async reading started")
// fs.readFile('7revision.txt', 'utf-8', (err, data2) => {
//     if(err) console.log(err)
//     else console.log(data)
// })
// console.log("async reading done")

// // sync writing
// var data = "hi this is node js class"
// fs.writeFileSync('7test.txt', data)

// // asynnc
// fs.writeFile('7test1.txt', data, (err) => {
//     if(err) console.log("errror")
// })
// console.log("writing done, check the desired module")

// // APIs use json data. Starts and ends with curly braces.
// var obj = { 
//     name: "arwin"
// }
// // obj to string conversion
// var parsed = JSON.stringify(obj)
// fs.writeFile('7test.json', parsed, (err) => {
//     if(err) console.log("file written")
// })
// console.log("file written")

// // file copy-sync
// fs.copyFileSync('7revision.txt', '7revisionSync.txt')

// // async
// fs.copyFile('7revision.txt', '7revisionSync.txt', (err) => {
//     if(err) console.log(err)
// })
// console.log("async copy done")

// // file rename
// fs.renameSync('7test.txt', '7test1.txt')
// fs.rename('7test1.txt', '7test2.txt', (err) => {
//     if(err) console.log(err)
// })

// // file deletion
// fs.unlinkSync('7test2.txt')
// fs.unlink('7test3.txt', (err) => {
//     if(err) console.log(err)
// })

// ---

// create a Server.
// read the content in a file using fs.
// sennd the result onto the server.

var http = require('http');

var server = http.createServer((req, res) => {
    fs.readFile('7revision.txt', 'utf-8', (err, data) => {
        if(err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(data);
        }
    });
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
})

