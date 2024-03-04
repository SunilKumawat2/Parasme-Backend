const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  technology: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
});

const TeamModals = mongoose.model("teams", TeamSchema);

module.exports = TeamModals;
