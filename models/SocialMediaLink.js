const mongoose = require("mongoose");

const SocialMediaLinkSchema = new mongoose.Schema({
    facebook_link:{
      type:String,
      required:true
    },
    tiwtter_link:{
        type:String,
        required:true
    },
    instagram_link:{
        type:String,
        required:true
    },
    behance_link:{
        type:String,
        required:true
    },
    youtube_link:{
        type:String,
        required:true
    },
    linkdin_link:{
        type:String,
        required:true
    }
})

const SocialMediaLinkModal = mongoose.model("socialmedialinks",SocialMediaLinkSchema);
module.exports = SocialMediaLinkModal;