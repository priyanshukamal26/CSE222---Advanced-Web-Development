var a=require('http')
a.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"text/html"})
    res.write("hello node server \n")
    res.write("iuvgsuvisd <br>")
    var a=40
    res.write(`val of a ${a} <br>`)
    res.write(`<h1>introduction </h1>`)
    function add(a, b){
        return a+b
    }
    res.write(`sum is ${add(10, 20)} <br>`)
    function fact(n){
        if(n==0||n==1){
            return 1
        }
        else{
            return n*fact(n-1)
        }
    }
    res.write(`factorial is ${fact(5)} <br>`)
    res.end()
}).listen(3000, ()=>{
    console.log("server started at port 3000")
})