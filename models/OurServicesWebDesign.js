const mongoose = require("mongoose");

const OurServicesWebDesignSchema = new mongoose.Schema({
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
const OurServicesWebDesignModal = mongoose.model("OurServicesDesignes", OurServicesWebDesignSchema)
module.exports = OurServicesWebDesignModal