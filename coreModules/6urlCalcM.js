const http = require('http');
const url = require('url');

// make this server work just like a calculator, through URL query params
// localhost:3000/?a=20&b=30&op=add

http.createServer((req, res) => {
    let data = url.parse(req.url, true);
    const a = parseFloat(data.query.a);
    const b = parseFloat(data.query.b);
    const op = data.query.op;
    let result;
    switch (op) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            if (b !== 0) {
                result = a / b;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operation';
    }
}).listen(3000);