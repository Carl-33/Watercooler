const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workplaceSchema = new Schema({
  company: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
});

const Workplace = mongoose.model("Workplace", workplaceSchema);

module.exports = Workplace;
