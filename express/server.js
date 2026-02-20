var exp = require('express')
var obj = new exp()

obj.get('/', (req, res) => {
    res.send("Hi")
})

obj.get('/home', (req, res) => {
    res.sendFile(__dirname + '/first.html')
})

obj.listen(3000, () => {console.log("server running")})