const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  images: {
    type: String,
    required: true,
  },
});
const sliderModels = mongoose.model("slidermodals", sliderSchema);
module.exports = sliderModels;
