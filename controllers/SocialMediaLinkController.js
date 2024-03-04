const SocialMediaLink = require("../models/SocialMediaLink");

const CreateSocialMediaLink = async (req, res) => {
  try {
    const {
      facebook_link,
      tiwtter_link,
      instagram_link,
      behance_link,
      youtube_link,
      linkdin_link,
    } = req.body;

    const newsocialMedialink = new SocialMediaLink({
      facebook_link,
      tiwtter_link,
      instagram_link,
      behance_link,
      youtube_link,
      linkdin_link,
    });
    await newsocialMedialink.save();
    return res.status(201).json({
      status: 201,
      message: "Successfully add The SocialMediaLink",
      data: newsocialMedialink,
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: "server side Error" });
  }
};

const GetSocialMediaLink = async (req, res) => {
  try {
    const SocialMedia = await SocialMediaLink.find();
    if (SocialMedia.length > 0) {
      const SocialMediaData = SocialMedia.map((SocialMediaResult) => ({
        _id: SocialMediaResult._id,
        facebook_link: SocialMediaResult.facebook_link,
        tiwtter_link: SocialMediaResult.tiwtter_link,
        instagram_link: SocialMediaResult.instagram_link,
        behance_link: SocialMediaResult.behance_link,
        youtube_link: SocialMediaResult.youtube_link,
        linkdin_link: SocialMediaResult.linkdin_link,
      }));
      return res
        .status(200)
        .json({
          status: 200,
          message: "Successfully fetch the SocialMedia",
          data: SocialMediaData,
        });
    } else {
      return res.status(400).json({ status: 400, message: "Data not Found" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, message: "Server side error" });
  }
};

const GetSocialMediaLinkGetById = async (req, res) => {
  try {
    const { _id } = req.params;
    const SocialMedia = await SocialMediaLink.findById(_id);
    if (!SocialMedia) {
      return res.status(404).json({ status: 404, message: "data Not Found SocialMediaLink By Id" })
    }
    const SocialMediaData = {
      _id: SocialMedia._id,
      facebook_link: SocialMedia.facebook_link,
      tiwtter_link: SocialMedia.tiwtter_link,
      instagram_link: SocialMedia.instagram_link,
      linkdin_link: SocialMedia.linkdin_link,
      youtube_link: SocialMedia.youtube_link,
      behance_link: SocialMedia.behance_link
    }
    return res.status(200).json({
      status: 200,
      message: "successfully fetch the SocialMediaLink By Id"
      , data: SocialMediaData
    })
  } catch (error) {
    return res.status(500).json({ status: 500, message: "server side error fetch the SocialMediaLink By Id" })
  }
}

const DeleteSocialMediaLink = async (req, res) => {
  try {
    const { _id } = req.params;
    const SocialMedia = await SocialMediaLink.findByIdAndDelete(_id);
    if (!SocialMedia) {
      return res.status(404).json({
        status: 404
        , message: "data not found the SocialMediaLink for the delete"
      })
    }
    return res.status(200).json({
      status: 200
      , message: "Successfully delete the SocialMediaLink"
      , data: SocialMedia
    })
  } catch (error) {
    return res.status(500).json({
      status: 500
      , message: "Server side error delete the SocialMediaLink"
    })

  }
}

const EditSocialMediaLink = async (req, res) => {
  try {
    const { _id } = req.params;
    const { facebook_link,
      tiwtter_link,
      instagram_link,
      youtube_link,
      behance_link,
      linkdin_link } = req.body;
    const SocialMedia = await SocialMediaLink.findByIdAndUpdate(_id, {
      facebook_link,
      tiwtter_link,
      instagram_link,
      youtube_link,
      behance_link,
      linkdin_link
    }, { new: true })
    if (!SocialMedia) {
      return res.status(404).json({
        status: 404,
        message: "Data not found Social Media Link edit"
      })
    }
    return res.status(201).json({
      status: 201,
      message: "Successfully edit the Social Media Link "
      , data: SocialMedia
    })

  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Server side error for  edit the Social Media Link "
    })

  }
}

module.exports = {
  CreateSocialMediaLink,
  GetSocialMediaLink,
  GetSocialMediaLinkGetById,
  DeleteSocialMediaLink,
  EditSocialMediaLink
};
