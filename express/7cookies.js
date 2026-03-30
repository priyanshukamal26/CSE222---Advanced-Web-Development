import express from "express";
import cokieParser from "cookie-parser";

const app = express();

app.use(cokieParser());

app.get("/", (req, res) => {
    res.cookie("name", "Rahul");
    res.send("Cookie set!");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

// Cookies are stored in the browser whereas CookieParser used in server application.

