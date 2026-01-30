// // File System Module
// // Synchronous Methods

// import fs from ("fs");
const fs = require("fs");

// // Create and write to a file
fs.writeFileSync("first.txt", "Hi!") // will overwrite existing content
fs.appendFileSync("first.txt", " How are you?") // will append to existing content

// // Read from a file
// let data = fs.readFileSync("first.txt", "utf-8")
// console.log(data) 
// or remove 2nd parameter "utf-8" and use:
let data = fs.readFileSync("first.txt")
console.log(data.toString())

// // Rename a file
// fs.renameSync("first.txt", "second.txt")

fs.writeFileSync("third.txt", "") // create an empty file
fs.copyFileSync("first.txt", "third.txt") // copy content of second.txt to third.txt

// // Delete a file
fs.unlinkSync("third.txt")


// // Asynchronous Methods

// // Create and write to a file
fs.writeFile("asyncFirst.txt", "Hello!", (err) => {
    if (err) {
        // console.log("error");
        throw err;
    }
    else{
        console.log("File created and data written!");
    }
})