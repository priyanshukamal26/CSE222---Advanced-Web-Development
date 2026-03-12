// Create a form with post method.
// One inout field asking the role of the user.
// fetch the role and if the entered value is "admin", then open the website.
// Otherwise, print "Wrong user" on the terminal (and do not open the website)

var exp = require('express');
var obj = exp();
var encoded = exp.urlencoded({extended: true});

obj.get('/', (req, res) => {
    res.sendFile(__dirname + "/3authmiddleware2.html");
});

var role = "";

obj.post('/authenticate', encoded, (req, res) => {
    role = req.body.role;
    res.redirect('/home');
});

var auth = (req, res, next) => {
    if(role == "admin") {
        console.log("Authenticated");
        next(); // to move to the next middleware or route handler
    }
    else {
        console.log("Wrong user");
    }
}

// obj.use(auth);

obj.get('/home', auth, (req, res) => {
    res.sendFile(__dirname + "/2copiedFile2.txt");
});

obj.listen(3000, () => {
    console.log("Server running on port 3000");
});