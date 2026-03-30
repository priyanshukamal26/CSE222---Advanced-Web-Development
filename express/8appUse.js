import express from "express";
const app = express();
// Middleware using app.use()
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  next(); // move to next step
});
// Route
app.get("/", (req, res) => {
  res.send("Hello World ");
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});