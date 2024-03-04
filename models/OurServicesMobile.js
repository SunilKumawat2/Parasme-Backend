const mongoose = require("mongoose");

const OurServicesMobileSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
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
const OurServicesMobileModal = mongoose.model("OurServicesMobiles", OurServicesMobileSchema)
module.exports = OurServicesMobileModal