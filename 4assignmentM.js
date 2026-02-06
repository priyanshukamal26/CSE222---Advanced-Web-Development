const fs = require("fs");
const eventEmitter = require("events");
const em = new eventEmitter();

let counter = {
    login : 0,
    purchase : 0,
    logout : 0,
}

// Load existing counter data if file exists
try{
    if (fs.existsSync("4assignmentCounter.json")) {
        const data = fs.readFileSync("4assignmentCounter.json", "utf-8");
        counter = JSON.parse(data);
        console.log("Loaded existing counter data:", counter);
    }
} 
catch (err) {
    console.error("Error reading file:", err);
}

function counterf() {
    fs.writeFileSync("4assignmentCounter.json", JSON.stringify(counter, null, 2));
}

em.on("UserLogin", (name) => {
    counter.login++;
    console.log("Welcome", name);
    // console.log("Login called for", counter.login, "time");
    counterf();
});

em.on("UserPurchase", (item) => {
    counter.purchase++;
    console.log("User purchased", item);
    // console.log("Purchase called for", counter.purchase, "time");
    counterf();
});

em.on("UserLogout", (name) => {
    counter.logout++;
    console.log("Logged out by", name);
    // console.log("Logout called for", counter.logout, "time");
    counterf();
});

em.emit("UserLogin", "Mickey");
em.emit("UserPurchase", "Notenook");
em.emit("UserLogout", "Mickey");
console.log("Access counts - login:", counter.login, "purchase:", counter.purchase, "logout:", counter.logout);

// // Save updated counter data to file - ALT METHOD
// fs.writeFile("4assignmentCounter.json", JSON.stringify(counter, null, 2), (err) => {
//     if (err) {
//         console.error("Error writing to file:", err);
//     } else {
//         console.log("Counter data saved to 4assignmentCounter.json");
//     }
// });

// fs.readFile("4assignmentCounter.json", "utf-8", (err) => {
//     if (err) {
//         console.error("Error reading file:", err);
//     } else {
//         const data = counter;
//         console.log(data);
//         console.log("Counter data read from 4assignmentCounter.json");
//     }
// });