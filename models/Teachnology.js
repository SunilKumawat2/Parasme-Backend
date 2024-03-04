const mongoose = require("mongoose");

const teachnologySchema = new mongoose.Schema({
  images: {
    type: String,
    required: true,
  },
});

const TeachnologyModal = mongoose.model("teachnologies", teachnologySchema);
module.exports = TeachnologyModal;
