const ContactForm = require("../models/ContactForm");

const CreateContactForm = async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      country,
      message,
      Websitedesign,
      OnlineAdvertising,
      MobileApp,
    } = req.body;
    const newContactForm = new ContactForm({
      name,
      email,
      company,
      country,
      message,
      Websitedesign,
      OnlineAdvertising,
      MobileApp,
    });
    await newContactForm.save();
    return res
      .status(201)
      .json({
        status: 201,
        message: "successfully add the contact form",
        data: newContactForm,
      });
  } catch (error) {
    return res.status(500).json({ status: 500, message: "server side error" });
  }
};
module.exports = { CreateContactForm };
