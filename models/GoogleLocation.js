const mongoose = require("mongoose");

const GoogleLocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    coordinates: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
});

// Index the coordinates field for geospatial queries
GoogleLocationSchema.index({ coordinates: '2dsphere' });

const GoogleLocationModal = mongoose.model("googleLocations", GoogleLocationSchema);
module.exports = GoogleLocationModal