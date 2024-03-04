const Messagebox = require("../models/Messagebox");
const nodemailer = require('nodemailer');

const CreateMessageBox = async (req, res) => {
  try {
    const { name, email, phone, country, company, helps } = req.body;

    const newmessagebox = new Messagebox({
      name,
      email,
      phone,
      country,
      company,
      helps,
    });
    await newmessagebox.save();
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
      subject: "Helping Form ",
      text: `
    Name: ${req.body.name}
    Email: ${req.body.email}
    Phone: ${req.body.phone}
    Company: ${req.body.company}
    Country: ${req.body.country}
    Helps: ${req.body.helps}
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


module.exports = { CreateMessageBox };
