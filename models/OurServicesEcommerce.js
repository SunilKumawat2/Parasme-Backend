const mongoose = require("mongoose");

const OurServicesEcommerceSchema = new mongoose.Schema({
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
const OurServicesEcommerceModal = mongoose.model("OurServicesEcommerce", OurServicesEcommerceSchema)
module.exports = OurServicesEcommerceModal