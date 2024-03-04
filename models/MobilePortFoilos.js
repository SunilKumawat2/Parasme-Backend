const mongoose = require("mongoose");

const MobilePortFoliosSchema = new mongoose.Schema({
    images: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    andriod_link: {
        type: String,
        required: true
    },
    ios_link: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const MobilePortFoliosModal = mongoose.model("mobileportfolios", MobilePortFoliosSchema);
module.exports = MobilePortFoliosModal;