// // File System Module
// // Synchronous Methods

// import fs from ("fs");
const fs = require("fs");

// // // Create and write to a file
// fs.writeFileSync("first.txt", "Hi!") // will overwrite existing content
// fs.appendFileSync("first.txt", " How are you?") // will append to existing content

// // // Read from a file
// // let data = fs.readFileSync("first.txt", "utf-8")
// // console.log(data) 
// // or remove 2nd parameter "utf-8" and use:
// let data = fs.readFileSync("first.txt")
// console.log(data.toString())

// // // Rename a file
// // fs.renameSync("first.txt", "second.txt")

// fs.writeFileSync("third.txt", "") // create an empty file
// fs.copyFileSync("first.txt", "third.txt") // copy content of second.txt to third.txt

// // // Delete a file
// fs.unlinkSync("third.txt")



// // -----------------------------



// // Asynchronous Methods

// // // Create and write to a file
// // Note: This will create the file if it does not exist
// // Note: This will overwrite the file if it exists
// fs.writeFile("asyncFirst.txt", "Hello!", (err) => {
//     if (err) {
//         console.log("error");
//         // throw err;
//     }
//     else{
//         console.log("File created and data written!");
//     }
// })

// // // Append to a file
// fs.readFile("asyncFirst.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("error");
//     }
//     else{
//         console.log(data);
//     }
// })

// // // Append to a file
// // Note: This will create the file if it does not exist
// fs.appendFile("asyncFirst.txt", " Welcome!", (err) => {
//     if (err) {
//         console.log("error");
//     }
//     else{
//         console.log("Data appended!");
//     }
// })

// // // Copy a file
// // Note: This will overwrite the destination file if it exists
// fs.copyFile("asyncFirst.txt", "asyncSecond.txt", (err) => {
//     if (err) {
//         console.log("error");
//     }
//     else{
//         console.log("File copied!");
//     }
// })

// // // Rename a file
// fs.rename("asyncFirst.txt", "asyncRenamed.txt", (err) => {
//     if (err) {
//         console.log("error");
//     }
//     else{
//         console.log("File renamed!");
//     }
// })  

// // Read from a file
fs.unlink("asyncFirst.txt", (err) => {
    if (err) {
        console.log("Error. File not found or could not be deleted.");
    }
    else{
        console.log("File deleted!");
    }
})