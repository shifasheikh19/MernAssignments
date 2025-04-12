const express = require("express");

const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Express server is running on port 5000!");
});

// GET /welcome route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
