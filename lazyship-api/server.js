// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Sample route for testing
app.get("/", (req, res) => {
  res.send("Welcome to LazyShip API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// server.js
let orders = [];

// Endpoint to create a new order
app.post("/api/orders", (req, res) => {
  const { pickupLocation, deliveryLocation } = req.body;
  const newOrder = {
    id: orders.length + 1,
    pickupLocation,
    deliveryLocation,
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Endpoint to get all orders
app.get("/api/orders", (req, res) => {
  res.json(orders);
});
// server.js
// Endpoint to process payment (dummy implementation)
app.post("/api/payment", (req, res) => {
  const { amount } = req.body;
  // Process payment logic here (e.g., integrate with payment gateway)
  res
    .status(200)
    .json({ message: `Payment processed successfully for ₹${amount}` });
});
