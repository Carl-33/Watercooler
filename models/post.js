const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  company: {
    type: String
  },
  location: {
    type: String
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
