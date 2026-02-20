var a=require('http')
a.createServer((req, res)=>{
    if(req.url=="/home"){
        res.writeHead(200, {"content-type":"text/html"})
        res.write(`<h1>Home Page</h1>`)
        res.end()
    }
    else if(req.url=='/profile'){
        res.writeHead(200, {"content-type":"text/html"})
        res.write(`<h1>Profile Page</h1>`)
        res.end()
    }
    else if(req.url=='/fact'){
        res.writeHead(200, {"content-type":"text/html"})
        res.write(`factorial is ${fact(5)} <br>`)
        function fact(n){
            if(n==0||n==1){return 1}
            else{return n*fact(n-1)}
        }
        res.end()
    }
    else if(req.url=='/arm'){
        res.writeHead(200, {"content-type":"text/html"})
        let num=153
        let sum=0
        let temp=num
        while(temp>0){
            let digit=temp%10
            sum+=digit**3
            temp=parseInt(temp/10)
        }
        if(sum==num){
            res.write(`${num} is an Armstrong number <br>`)
        }
        else{
            res.write(`${num} is not an Armstrong number <br>`)
        }
        res.end()
    }
    else{
        res.writeHead(200, {"content-type":"text/html"})
        res.write(`<h1>Home Page</h1>`)
        res.write(`<h1>Menu</h1><br>
            <a href="/fact">Factorial</a><br>
            <a href="/arm">Armstrong</a>`)
        res.end()
    }
}).listen(3000, ()=>{
    console.log("server started at port 3000")
})