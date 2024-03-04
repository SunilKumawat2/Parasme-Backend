const mongoose = require("mongoose");

const Messagebox = new mongoose.Schema({
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
  country: {
    type: String,
    required: true,
  },
  company:{
   type:String,
   required:true
  },
  helps: {
    type: String,
    required: true,
  },
});

const MessageModal = mongoose.model("messages",Messagebox);
module.exports = MessageModal;
