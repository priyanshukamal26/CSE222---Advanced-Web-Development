app.get("/set-cookie", (req, res) => { 
    res.cookie("username", "Rohit", { maxAge: 10000 }); // expires in 10 sec 
    res.send("Cookie set for 10 seconds!"); 
}); 
app.get("/set-session", (req, res) => { 
    if (!req.session.views) { 
        req.session.views = 1; 
    } else { 
        req.session.views++; 
    } 
    res.send(`Session views count: ${req.session.views}`); 
});