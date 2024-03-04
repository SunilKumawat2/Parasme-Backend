const mongoose = require("mongoose");

const PagesModalsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  shortdescription: {
    type: String,
  },

  content: {
    type: String,
    required: true,
  },
  subcontent: {
    type: String,
  },
  images: {
    type: String,
    required: true,
  },
});

const PagesModals = mongoose.model("pages", PagesModalsSchema);
module.exports = PagesModals;
