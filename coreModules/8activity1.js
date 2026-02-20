// Create 3 URLs:
// /home - "Welcome to Home Page"
// /about - "About us information"
// /contact - "Contact us hhere!"
// On visiting the  "/" url
// Logs saved using appendFile() method - add to log.txt file "Request received at on [Current Date]"

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.url == '/home') {res.end("Home Page")}
    else if(req.url == '/about') {res.end("About Page")}
    else if(req.url == '/contact') {res.end("Contact Page")}
    else {
        log = "req received on " + new Date()
        res.write(log)
        fs.appendFileSync('log.txt', log)
        res.end()
    }
}).listen(3000, () => {console.log("Server running on port 3000")})
