// Create a form with post method, take a input with type number.
// Fetch the entered number, find the factorial of the fetched number.
// send the result of the factorial onto the server.

var exp = require('express');
var fs = require('fs');
var obj = exp();

var encoded = exp.urlencoded({extended: true}); // for parsing application - post data

obj.post('/taskformdetails', encoded, (req, res) => {
    var uname = req.body.n1;
    var pwd = req.body.n2;
    var num1 = req.body.n3;
    var file1 = req.body.n4;
    fs.copyFileSync(file1, '/copiedFile.txt');
    function fact(n) {
        if (n === 0) return 1;
        return n * fact(n - 1);
    }
    var factorial = fact(num1);
    res.send(`{\n username: ${uname},\n password: ${pwd},\n factorial: ${factorial} \n}, <br> File copied successfully! Check the desired folder for the copied file.`);
});
    
obj.get('/factorial', (req, res) => {
    res.sendFile(__dirname + "/2task1.html");
});

obj.listen(3000, () => {
    console.log("Server running on port 3000");
});