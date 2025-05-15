const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express on Lambda!!!");
});

app.post("/echo", (req, res) => {
  res.json({ received: req.body });
});

module.exports = app;
