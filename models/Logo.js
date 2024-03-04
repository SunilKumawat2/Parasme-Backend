const mongoose = require("mongoose");

const LogoSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const LogoModal = mongoose.model("logos", LogoSchema);
module.exports = LogoModal;
