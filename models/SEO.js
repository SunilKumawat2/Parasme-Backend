const mongoose = require("mongoose");

const SEOSchema = new mongoose.Schema({
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

const SEOModal = mongoose.model("seo", SEOSchema)
module.exports = SEOModal;