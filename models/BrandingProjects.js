const mongoose = require("mongoose");

const BrandingProjectSchema = new mongoose.Schema({
  images: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const BrandingProjectModals = mongoose.model(
  "brandingproject",
  BrandingProjectSchema
);
module.exports = BrandingProjectModals;
