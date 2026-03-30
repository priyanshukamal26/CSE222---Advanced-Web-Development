import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

// app; get, post, read, delete

app.get("/", (req, res) => {
    res.cookie("user", "xyz");
    res.send("Cookie created!");
});

app.get("/check", (req, res) => {
    res.send(req.cookies);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});