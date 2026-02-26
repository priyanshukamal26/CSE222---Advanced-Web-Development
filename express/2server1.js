var exp = require('express');
var obj = exp();

var encoded = exp.urlencoded({extended: true}); // for parsing application - post data

obj.get("/", (req, res) => {
    res.send(`
        <a href = "/login">Login with GET</a><br>
        <a href = "/loginpost">Login with POST</a><br>
    `);
});

obj.post('/formdetailspost', encoded, (req, res) => {
    var uname = req.body.n1;
    var pwd = req.body.n2;
    res.send(`{\n username: ${uname},\n password: ${pwd} \n}`);
});
    
obj.get('/login', (req, res) => {
    res.sendFile(__dirname + "/2formGet.html");
});

obj.get('/loginpost', (req, res) => {
    res.sendFile(__dirname + "/2formPost.html");
});

obj.get('/formdetails', (req, res) => {
    var uname = req.query.n1;
    var pwd = req.query.n2;
    res.send(`{\n username: ${uname},\n password: ${pwd} \n}`);
});

obj.listen(3000, () => {
    console.log("Server running on port 3000");
});