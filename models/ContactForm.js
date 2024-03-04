const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  Websitedesign: {
    type: String,
    required: true,
  },
  OnlineAdvertising: {
    type: String,
    required: true,
  },
  MobileApp: {
    type: String,
    required: true,
  },
});

const ContactFormModal = mongoose.model("contactforms", ContactSchema);
module.exports =  ContactFormModal ;
