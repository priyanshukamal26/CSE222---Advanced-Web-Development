// JSON - JavaScript Object Notation
// It’s a lightweight format for storing and exchanging data.
// Types - json.parse() and json.stringify()

const fs = require("fs");

// // This code returns the complete content of the file as a string
// fs.readFile("5json01.json", "utf-8", (err, data)=> {
//     if(err) {
//         console.log("Error");
//     }   
//     else {
//         console.log(data);
//     }
// });


// Writing JSON data to a file
const student = {name:"Parveen", rollno:123, section:"ABC"};
// fs.writeFile("5student.json", JSON.stringify(student), (err)=> { // Stores as a string, in a single line.
// fs.writeFile("5student.json", JSON.stringify(student, null, 2), (err)=> { // Default stringify arguments
// fs.writeFile("5student.json", JSON.stringify(student, ["name", "rollno"], 2), (err)=> { // Adds just name and rollno; REPLACER 
// // HOMEWORK - How to manipulate date insertion using consitional statements? Get more control?
// fs.writeFile("5student.json", JSON.stringify(student, null, 2), (err)=> {
//     if(err) {
//         console.log("Error in writing file");
//     }
//     else {
//         console.log("Data added successfully");
//     }
// });

// fs.readFile("5student.json", "utf-8", (err, data)=> {
//     if(err) {
//         console.log("Error in reading file");
//     }   
//     else {
//         const studentdata = JSON.parse(data);
//         console.log(studentdata);
//         console.log(studentdata.name);
//         console.log(studentdata.rollno);
//         console.log(studentdata.section);
//     }
// });

// // Append data to JSON file
// // This method throws ERROR in json file. Use method 2.
// const newStudent = {name:"Aman", rollno:124, section:"DEF"};
// fs.appendFile("5student.json", JSON.stringify(newStudent, null, 2), (err)=>{
//     if(err) {
//         console.log("Error appending json file.");
//     }
//     else {
//         console.log("File appended successfully");
//     }
// })


// // // METHOD 2. Read. Parse. Append.
// const filedata = fs.readFile("5student.json", "utf-8", (err, data)=>{
//     if(err) return console.log("Error erading json file");
//     // else console.log("File read successfully");
//     const filedata = data;
//     console.log(filedata);
//     console.log("File read successfully");
// });
// // parsing
// const stud = JSON.parse(filedata);
// stud.push({
//     "name":"Yahsu",
//     "rollno": 6,
//     "section": "CZ"
// });
// fs.writeFile("students.json", JSON.stringify(students, null, 2), (err) => {
//     if (err) console.log(err);
//     else console.log("Student added");
//     }
// );


const newStudent = {name:"Aman", rollno:124, section:"DEF"};
const stud = fs.readFileSyns("5student.json", "UTF-8");
const filedata = JSON.parse(stud);
filedata.push(newStudent);
fs.writeFileSync("5student.json", JSON.stringify(filedata, null, 2));



// fs.readFile('5student.json', 'utf-8', (err, data) => {
//     if(err) return console.log("error1");
//     let users = JSON.parse(data);
//     users.push({name:'New User', rollno:30, section:"K24FA"})
//     fs.writeFile('5student.json', JSON.stringify(users, null, 2), (err) => {
//         if(err) return console.log("error");
//         console.log("data added successfully.");
//     });
// });