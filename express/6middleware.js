import express from 'express'
const app = express()

const myLogger = (req, res, next) => {
    console.log("before login")
    next()
    console.log("after login")
}

app.use(myLogger)

app.get('/', (req, res) => {
    console.log("WELCOME")
    res.send("WELCOME")
})

app.listen(5000)

// // Keep output screenshots in all 3 steps of the console logs to show the order of execution.
// const myLogger = (req, res, next) => {
//     console.log("before login")
//     console.log("after login")
//     next()
// }

// const myLogger = (req, res, next) => {
//     console.log("before login")
//     next()
//     console.log("after login")
// }

// const myLogger = (req, res, next) => {
//     next()
//     console.log("before login")
//     console.log("after login")
// }