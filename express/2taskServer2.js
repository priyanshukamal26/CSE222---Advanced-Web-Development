var exp = require('express');
var fs = require('fs');
var obj = new exp();

var encoded = exp.urlencoded({extended: true}); // for parsing application - post data

obj.get('/uploadfile', (req, res) => {
    res.sendFile(__dirname + "/2task2.html");
});

obj.post('/writeFile', encoded, (req, res) => {
    var file21 = req.body.f1;
    fs.readFile(file21, (err, data1) => {
        if(err) {
            res.send(err);
        }
        else {
            fs.writeFile(__dirname + '/2copiedFile2.txt', data1, (err) => {
                if(err) {
                    res.send(err);
                }
                else {
                    res.send(`File copied successfully! Check the desired folder for the copied file. \n <br> <br> ${data1}`);
                }
            });
        }
    });
});

obj.listen(3000, () => {
    console.log("Server running on port 3000");
})