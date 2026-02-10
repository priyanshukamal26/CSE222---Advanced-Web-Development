const http = require('http'); // Importing the http module to create a server
http.createServer((req, res) => { // Creating a server and defining the request handler
    if(req.url === "/about") { 
        console.log("This is my about page"); // On console
        res.write("This is my about page"); // On screen - localhost:3000/about
    }
    else if(req.url === "/home") {
        console.log("Welocme, this is my home page"); // On console
        res.write("Welocme, this is my home page"); // On screen - localhost:3000/home
    }
    else {
        console.log("This is my default page"); // On console
        res.write("This is my default page"); // On screen - localhost:3000/anythingElse
    }
    res.end(); // Ending the response to send it back to the client
}).listen(3000); // The server listens on port 3000 for incoming requests