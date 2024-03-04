const monggose = require("mongoose");

const WhatsAppSchema = new monggose.Schema({
  Whatsapp_link: {
    type: String,
     required:true,
  },
});
const WhatsappModal = monggose.model("whatsappSlink", WhatsAppSchema);
module.exports = WhatsappModal;
