const mongoose = require("mongoose");

const AwardSechema = new mongoose.Schema({
  images: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
});

const AwardModals = mongoose.model("awards", AwardSechema);
module.exports = AwardModals;
