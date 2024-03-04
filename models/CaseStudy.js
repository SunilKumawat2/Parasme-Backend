const mongoose = require("mongoose");

const CaseStudySchema = new mongoose.Schema({
    images: {
        type: String,
        required: true
    },
    app_title: {
        type: String,
        required: true
    },
    app_type: {
        type: String,
        required: true
    },
    android_link: {
        type: String,
        required: true
    },
    ios_link: {
        type: String,
        required: true
    },
    about_app: {
        type: String,
        required: true
    }
})

const CaseStudyModal = mongoose.model("casestudies", CaseStudySchema);

module.exports = CaseStudyModal;