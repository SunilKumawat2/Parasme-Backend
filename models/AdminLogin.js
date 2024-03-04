const mongoose = require("mongoose");

const AdminLoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const AdminLoginModal = mongoose.model("adminlogins", AdminLoginSchema);
module.exports = AdminLoginModal;