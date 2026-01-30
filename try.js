// console.log("Hi");
// global.console.log("hi");
// globalThis.console.log("hi there");
// console.log(process);
// comsole.log(global);

// server Revision

import http from 'http';
// const http = require('http');
const port = 3000;
http.createServer((req, res) => {
    // res.writeHead(200, { "content-type": "text/html" });
    res.write("hello node server \n");
    res.end();
}).listen(port);