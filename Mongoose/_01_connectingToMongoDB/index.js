// Connecting to MongoDB

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Class') // corrected 'monogodb' ➝ 'mongodb'
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error while connecting:", err);
  });
