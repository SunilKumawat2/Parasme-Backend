const mongoose = require("mongoose");
const developmentservices = require("../models/DevelopmentServices");

const DevelopmentServicesDetailsSchema = new mongoose.Schema({
    developmentService: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'developmentservices',
        autopopulate: true,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    images: {
        type: String,
    },
});

// Add the mongoose-autopopulate plugin to automatically populate the referenced document
DevelopmentServicesDetailsSchema.plugin(require('mongoose-autopopulate'));

const DevelopmentServicesDetailsModal = mongoose.model("developmentservicesDetails", DevelopmentServicesDetailsSchema);

module.exports = DevelopmentServicesDetailsModal;
