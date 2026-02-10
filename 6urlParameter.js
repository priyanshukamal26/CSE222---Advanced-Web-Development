const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let data = url.parse(req.url, true);
    const name = data.query.name;
    res.write('Query resolved, ' + name + '!'); // Output: Query resolved, YourName!
    res.end();
}).listen(3000);

// run the server and access http://localhost:3000/?name=YourName to see the result.