const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const port = 3100;

// Route Handler
const blogs = require("./routes/blogs")



app.get("/", (req, res) => {
  res.send("Hello World!");
});

  mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.nacqp5f.mongodb.net/baizid-builders?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    console.log("Database Connection successful");
  });

  app.use("/blogs", blogs)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
