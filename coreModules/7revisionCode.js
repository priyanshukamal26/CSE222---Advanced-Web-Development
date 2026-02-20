// create a Server.
// read the content in a file using fs.
// send the result onto the server.

var fs = require('fs');
var http = require('http');

http.createServer((req, res) => {
    fs.readFile('7revision.txt', 'utf-8', (err, data) => {
        if(err) {
            // res.write(err);
            // res.end()
            res.end(err);
        } else {
            res.end(data);
        }
    })
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
}) 