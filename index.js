const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3100;



app.get("/", (req, res) => {
  res.send("Hello World!");
});

  mongoose.connect("mongodb+srv://tendertradinginc9:qR8z478vExp4xIVA@cluster0.nacqp5f.mongodb.net/baizid-builders?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Database Connection successful");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
