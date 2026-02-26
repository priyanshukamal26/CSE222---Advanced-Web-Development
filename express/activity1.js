const express = require('express');
const fs = require('fs');

const app = express();

app.get('/home', (req, res) => {
    res.send("Home Page");
});

app.get('/about', (req, res) => {
    res.send("About Page");
});

app.get('/contact', (req, res) => {
    res.send("Contact Page");
});

app.get('/', (req, res) => {
    const log = "req received on " + new Date() + '\n';
    res.send(log);
    fs.appendFileSync('log.txt', log);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});











































// tasks
// techniques
// wj

// ids
// hc
// as