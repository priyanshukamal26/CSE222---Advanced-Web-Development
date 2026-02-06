const fs = require("fs/promises");
const EventEmitter = require("events");

// Create Event Emitter
const eventEmitter = new EventEmitter();

// Event count object
const eventCount = {
  login: 0,
  purchase: 0,
  update: 0,
  logout: 0,
};

// Helper function to log events to file
const logEvent = async (message) => {
  try {
    await fs.appendFile("events.log", message + "\n", "utf-8");
  } catch (err) {
    console.error("File write error:", err);
  }
};

// Event listeners
eventEmitter.on("login", async (username) => {
  eventCount.login++;
  const msg = `${username} logged in`;
  console.log(msg);
  await logEvent(msg);
});

eventEmitter.on("purchase", async (username, item) => {
  eventCount.purchase++;
  const msg = `${username} purchased ${item}`;
  console.log(msg);
  await logEvent(msg);
});

eventEmitter.on("update", async (username) => {
  eventCount.update++;
  const msg = `${username} updated profile`;
  console.log(msg);
  await logEvent(msg);
});

eventEmitter.on("logout", async (username) => {
  eventCount.logout++;
  const msg = `${username} logged out`;
  console.log(msg);
  await logEvent(msg);
});

// Emit events
eventEmitter.emit("login", "Amit");
eventEmitter.emit("purchase", "Amit", "Laptop");
eventEmitter.emit("update", "Amit");
eventEmitter.emit("logout", "Amit");

// Show event counts
setTimeout(() => {
  console.log("\nEvent Call Counts:");
  console.log(eventCount);
}, 500);
