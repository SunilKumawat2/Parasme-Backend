const mongoose = require("mongoose");

const MandatorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
},
  { timestamps: true }
);

const MandatoryModal = mongoose.model("mandatory", MandatorySchema);

module.exports = MandatoryModal;
