var exp = require('express');
var obj = exp();

// first way of creating middleware
var log = (req, res, next) => {
    console.log(`first security check passed ${req.method}`);
    next();
}

// Calling a middleware
obj.use(log); // using the middleware

obj.use((req, res, next) => {
    console.log(`second security check passed ${req.url}`);
    next();
});

obj.get('/', (req, res) => {
    res.send(`<h1>Application level middleware</h1>`);
});

obj.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});