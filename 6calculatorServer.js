// Create a calculator server using Node.js, all parameters will be passed in the URL, for example: http://localhost:3000/add/5/10

const http = require('http');
http.createServer((req, res) => {
    const urlParts = req.url.split('/');
    const operation = urlParts[1];
    const num1 = parseFloat(urlParts[2]);
    const num2 = parseFloat(urlParts[3]);
    let result;

    // Performing the requested operation
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operation';
    }
    res.write(`Result: ${result}`);
    res.end();
}).listen(3000);