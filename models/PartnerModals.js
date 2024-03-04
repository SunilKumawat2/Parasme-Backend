const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
});
const PartnerModals = mongoose.model("partners", PartnerSchema);
module.exports = PartnerModals;
