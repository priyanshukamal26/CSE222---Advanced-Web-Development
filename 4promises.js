// const fs = require("fs").promises;
// const fs = require("fs");
const fs = require("fs/promises");

// // Create and write to a file
// fs.writeFile("Hello.txt", "New file is created successdully!", "utf-8")
// .then(console.log("File created and data written!"))
// // .catch(console.log("Error in writing file!"));
// .catch((err)=>console.log(err));

// // Read from a file
// fs.readFile("Hello.txt", "utf-8")
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

// // Copy data from one file to another file
// fs.copyFile("Hello.txt", "HelloCopy.txt")
// .then(console.log("File copied successfully!"))
// .catch((err)=>console.log(err));



const writedata = async()=>{
    try{
        await fs.appendFile("Example.txt", "New file is created.", "utf-8");
        console.log("File created");
    }
    catch(err){
        console.log(err);
    }
}
writedata() // Calling coz async (arrow function) is assigned in a variable (writedata)

// Task : fs and Event based code
// any 4 events / functions - user login, user purchase, profile update, logout ; using event emmitter.
// count event call counts