// localhost:3000/?n1=10&n2=20
var http = require('http');
var url1 = require('url');
http.createServer((req, res) => {
    const data = url1.parse(req.url, true);
    console.log(data);
    var n1 = data.query.n1;
    var n2 = data.query.n2;
    res.end(`n1 is ${n1} and n2 is ${n2}`)
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})