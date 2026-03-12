// ope the website if the role is admin.
// Otherwise, print "Wrong user" on the terminal (and do not open the website)

var exp = require('express');
var obj = exp();
var fake = {id:1, name:"evaa", role:"admin"}
var auth = (req, res, next) => {
    if(fake.role == "admin1") {
        console.log("Authenticated");
        next(); // to move to the next middleware or route handler
    }
    else {
        console.log("Wrong user");
    }
}

obj.use(auth);

// obj.get('/home', (req, auth, res) => { // remove previous line
obj.get('/home', (req, res) => {
    res.sendFile(__dirname + "/2copiedFile2.txt");
});



obj.listen(3000, () => {
    console.log("Server running on port 3000");
});