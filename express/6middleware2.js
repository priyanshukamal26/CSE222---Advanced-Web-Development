import express from 'express';
const app = express()

const myLogger = (req, res, next) => {
    console.log("Request receive");
};

app.get("/", (res, req, next) => {
    const error = new Error("route error")
    error.statuscode = 400;
    next.error()
});

// error handling middleware
app.use((err, req, res, next) => {
    console.log("Error handling middleware")
    res.status(err.statuscode || 500).json({
        message: err.message
    })
});

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})