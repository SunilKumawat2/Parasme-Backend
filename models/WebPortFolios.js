const mongoose = require("mongoose");
const WebPortFoliosSchema = new mongoose.Schema({
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
})

const WebPortFoliosModal = mongoose.model("webportfolios", WebPortFoliosSchema);
module.exports = WebPortFoliosModal;