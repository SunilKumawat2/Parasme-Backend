const mongoose = require("mongoose");

const OurServicesGraphicsSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    images: {
        type: String
    },
    sub_title: {
        type: String
    },
    sub_description: {
        type: String
    },
    about_page: {
        type: String
    }
})
const OurServicesGraphicsModal = mongoose.model("OurServicesGraphicses", OurServicesGraphicsSchema)
module.exports = OurServicesGraphicsModal