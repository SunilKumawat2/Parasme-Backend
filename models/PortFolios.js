const mongoose = require("mongoose");

const PortFolioSchema = new mongoose.Schema(
  {
    images: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    decription: {
      type: String,
      required: true,
    },
    web_link: {
      type: String,
      required: true,
    },
    ios_link: {
      type: String,
      required: true,
    },
    android_link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PortFolioModal = mongoose.model("portfolios", PortFolioSchema);
module.exports = PortFolioModal;
