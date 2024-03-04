const mongoose = require("mongoose");

const AllPortFoliosSchema = new mongoose.Schema({
    images: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    decripation: {
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

const AllPortFoliosModal = mongoose.model("allportfolios", AllPortFoliosSchema);
module.exports = AllPortFoliosModal;