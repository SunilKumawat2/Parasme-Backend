const mongoose = require("mongoose");

const HelpingFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    company: {
        type: String,
    },
    country: {
        type: String,
        required: true
    }
    , message: {
        type: String,
    },
    Websitedesign: {
        type:String,
    },
    OnlineAdvertising: {
        type:String,
    },
    MobileApp: {
        type:String,
    }

})
const HelpingFormModal = mongoose.model("helpingform", HelpingFormSchema);
module.exports = HelpingFormModal;  