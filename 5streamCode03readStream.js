// 5streamCode03readStream.js

const fs = require("fs");

const readStream = fs.createReadStream("5streamCode01input.txt", "utf8");

readStream.on("data", (chunk) => {
    console.log("Received chunk:", chunk);
});

readStream.on("end", () => {
    console.log("Finished reading file.")
});

readStream.on("error", (err) => {
    console.error("Error reading file:", err);
});


// writeStream = fs.createWriteStream("5streamCode01output.txt");
