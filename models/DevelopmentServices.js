const mongoose = require("mongoose");

const DevelopmentServicesSchema = new mongoose.Schema({
    main_title: {
        type: String
    },
    short_description: {
        type: String
    },
    images: {
        type: String
    }   
})
const DevelopmentServicesModal = mongoose.model("developmentservices", DevelopmentServicesSchema)
module.exports = DevelopmentServicesModal
