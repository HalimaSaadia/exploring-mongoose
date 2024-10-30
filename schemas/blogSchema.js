const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status:{
    type: String,
    enum:["active", "inactive"]
  },
  date:{
    type: Date,
    default: Date.now
  }
});
const Blog = new mongoose.model("Blog",blogSchema)
module.exports = Blog
