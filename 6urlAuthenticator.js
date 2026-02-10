const http = require('http');
const url = require('url');

// Make login validator through URL query params
// localhost:3000/?username=admin&password=1234

http.createServer((req, res) => {
    let data = url.parse(req.url, true);
    const username = data.query.username;
    const password = data.query.password;
    if (username === 'admin' && password === '1234') {
        res.write('admin Login successful!');
    }
    else if (username === 'guest' && password === '123') {
        res.write('guest Login successful!');
    } else {
        res.write('Login failed: Invalid username or password');
    }
    res.end();
}).listen(3000);