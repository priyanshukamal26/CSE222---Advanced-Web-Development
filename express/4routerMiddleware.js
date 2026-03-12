// Drawback of app;ication level middleware = sectrity checks will be
// executed for every pageXOffset. To avoid ImageTrack, we can use router level middleware. Router level middleware is used to perform some operations on a particular route or group of routes.

var exp = require('express');
var obj = exp();
var router  = exp.Router();
// var router1  = exp.Router();

var rou1 = (req, res, next) => {
    console.log("Running for home page");
    next();
}

var rou2 = (req, res, next) => {
    console.log("Running for profile page");
    next();
}

router.get('/4index.html', rou1, (req, res) => {
    res.send(`<h1>Home Page</h1>`);
})

router.get('/profile', rou2, (req, res) => {
    res.send(`<h1>Profile Page</h1>`);
})

app.post('/register', (req, res) => {
    console.log(req.body);
});

obj.use('/admin', router) // mounting

obj.listen(3000, () => { console.log("Server running") })