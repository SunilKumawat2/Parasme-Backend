const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    }
})
const BlogModal = mongoose.model("blogs", BlogSchema)
module.exports = BlogModal