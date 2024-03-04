const nodemailer = require('nodemailer');
const MandatoryModal = require('../models/MandatoryForm');

const CreateMandatoryForm = async (req, res) => {
  try {
    const { name, email, phone, budget, message } = req.body;

    const newmandatoryform = new MandatoryModal({
      name,
      email,
      phone,
      budget,
      message,
    });

    // Save the form data to the database
    await newmandatoryform.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sunilmi7891@gmail.com', // Replace with your Gmail email
        pass: 'xbiu chpv laru tvlp', // Replace with your Gmail password or an app-specific password
      },
    });

    const mailOptions = {
      from: req.body.email, // Use the email from the form data
      to: 'info@parasmesoft.com',
      subject: "Let's start a new project together!",
      text: `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        Budget: ${req.body.budget}
        Message: ${req.body.message}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ status: 500, message: 'Server error' });
      }

      console.log('Email sent:', info.response);

      return res.status(201).json({
        status: 201,
        message: 'Successfully added the message and sent email',
        data: newmandatoryform,
      });
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ status: 500, message: 'Server error' });
  }
};

const GetMandatoryForm = async (req, res) => {
  try {
    const mandatoryform = await MandatoryModal.find();
    if (!mandatoryform) {
      return res.status(404).json({ status: 404, message: "No mandatoryform found" });
    }
    return res.status(200).json({ status: 200, message: "Mandatoryform found", data: mandatoryform });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 500, message: "Server error" });
  }
}

const GetMandatoryFormById = async (req, res) => {
  try {
    const { _id } = req.params;
    const mandatoryform = await MandatoryModal.findById(_id);
    if (!mandatoryform) {
      return res.status(404).json({ status: 404, message: "No mandatoryform found" });
    }
    const mandatoryformData = {
      _id: mandatoryform._id,
      name: mandatoryform.name,
      email: mandatoryform.email,
      phone: mandatoryform.phone,
      budget: mandatoryform.budget,
      message: mandatoryform.message,
      createdAt: mandatoryform.createdAt,
    }
    return res.status(200).json({ status: 200, message: "Mandatoryform found", data: mandatoryformData });
  }catch(error){
    return res.status(500).json({ status: 500, message: "Server error" });
  }
}

module.exports = { CreateMandatoryForm, GetMandatoryForm ,GetMandatoryFormById};
