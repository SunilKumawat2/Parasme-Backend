const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  technology: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
});

const ClientModal = mongoose.model("clients", ClientSchema);
module.exports = ClientModal;
