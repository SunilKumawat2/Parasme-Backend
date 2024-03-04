const HelpingForm = require("../models/HelpingForm")
const nodemailer = require('nodemailer');

const createHelpingForm = async (req, res) => {
    try {
        const { name, email, phone, company, country, message, Websitedesign,
             OnlineAdvertising, MobileApp } = req.body;
        const newHelpingForm = new HelpingForm({
            name,
            email,
            phone,
            company,
            country,
            message,
            Websitedesign,
            OnlineAdvertising,
            MobileApp
        })
        await newHelpingForm.save();
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
            subject: "Helping Form ",
            text: `
          Name: ${req.body.name}
          Email: ${req.body.email}
          Phone: ${req.body.phone}
          Message: ${req.body.message}
          Company: ${req.body.company}
          Country: ${req.body.country}
          Websitedesign: ${req.body.Websitedesign}
          OnlineAdvertising: ${req.body.OnlineAdvertising}
          MobileApp: ${req.body.MobileApp}
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

}

const GetHelpingForm = async (req, res) => {
    try {
        const HelpingForms = await HelpingForm.find();
        if (HelpingForms.length > 0) {
            const HelpingFormData = HelpingForms.map((HelpingFormResult) => ({
                _id: HelpingFormResult._id,
                name: HelpingFormResult.name,
                email: HelpingFormResult.email,
                phone: HelpingFormResult.phone,
                company: HelpingFormResult.company,
                country: HelpingFormResult.country,
                message: HelpingFormResult.message,
                Websitedesign: HelpingFormResult.Websitedesign,
                OnlineAdvertising: HelpingFormResult.OnlineAdvertising,
                MobileApp: HelpingFormResult.MobileApp
            }))
            return res.status(200).json({
                status: 200,
                message: "Successfully Fetch the Helping form data",
                data: HelpingFormData
            })
        }
        else {
            return res.status(404).json({
                status: 404,
                message: "No Helping form data found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Server error while fetching the Helping form data "
        })
    }
}

const DeleteHelpingForm = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteHelpingForm = await HelpingForm.findByIdAndDelete(_id);
        if (!deleteHelpingForm) {
            return res.status(404).json({
                status: 404,
                message: "Helping form not found For the delete"
            })
        }
        return res.status(200).json({ status: 200, message: "successfuly Delete the Helping Form data", deleteHelpingForm })
    }
    catch (error) {
        return res.status(500).json({ status: 500, message: "Server error while deleting the Helping Form data" })
    }
}

const GetHelpingFormById = async (req, res) => {
    try {
        const { _id } = req.params;
        const HelpingFormById = await HelpingForm.findById(_id);
        if (!HelpingFormById) {
            return res.status(404).json({
                status: 404,
                message: "Helping Form not found"
            })
        }
        const HelpingFormData = {
            _id: HelpingFormById._id,
            name: HelpingFormById.name,
            email: HelpingFormById.email,
            phone: HelpingFormById.phone,
            company: HelpingFormById.company,
            country: HelpingFormById.country,
            message: HelpingFormById.message,
            Websitedesign: HelpingFormById.Websitedesign,
            OnlineAdvertising: HelpingFormById.OnlineAdvertising,
            MobileApp: HelpingFormById.MobileApp
        }
        return res.status(200).json({
            status: 200,
            message: "Successfully Fetch the Helping Form data Get By id",
            data: HelpingFormData
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Server error while fetching the Helping Form data"
        })
    }
}

module.exports = { createHelpingForm, GetHelpingForm, DeleteHelpingForm,GetHelpingFormById }