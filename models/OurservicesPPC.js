const mongoose = require("mongoose");

const OurServicesPPCSchema = new mongoose.Schema({
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
const OurServicesPPCModal = mongoose.model("OurServicesPPC", OurServicesPPCSchema)
module.exports = OurServicesPPCModal