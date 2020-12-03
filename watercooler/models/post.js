const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  author: {
    type: String,
    required: true,
  },

  body: {
    type: String,
  },
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
