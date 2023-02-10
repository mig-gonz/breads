const express = require("express");

// configuration

require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// console.log(PORT);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads");
});

// Breads
const breadsController = require("./controllers/bread_controllers.js");
app.use("/breads", breadsController);

// listen
app.listen(PORT, () => {
  console.log("listen on port", PORT);
});
