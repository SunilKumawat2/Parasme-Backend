const WhatsApp = require("../models/WhatsApp");

const CraeteWhatsApp = async (req, res) => {
  try {
    const { Whatsapp_link } = req.body;

    const newWhatsApp = new WhatsApp({
      Whatsapp_link,
    });
    await newWhatsApp.save();
    return res.status(201).json({
      status: 201,
      message: "Successfully Add The WhatsApp",
      data: newWhatsApp,
    });
  } catch (error) {
    console.log(error);
  }
};

const GetWhatsApp = async (req, res) => {
  const WhatsAppLink = await WhatsApp.find();
  try {
    if (WhatsAppLink.length > 0) {
      const WhatsAppLinkData = WhatsAppLink.map((WhatsAppLinkResult) => ({
        _id: WhatsAppLinkResult._id,
        Whatsapp_link: WhatsAppLinkResult.Whatsapp_link,
      }));
      return res
        .status(200)
        .json({
          status: 200,
          message: "Successfully fetch the WhatsAppLink",
          data: WhatsAppLinkData,
        });
    } else {
      return res.status(400).json({ status: 400, message: "Data Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, message: "server side error" });
  }
};
module.exports = { CraeteWhatsApp, GetWhatsApp };
