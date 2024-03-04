const AwardModal = require("../models/AwardModals");

const CreateAward = async (req, res) => {
  try {
    const { heading, paragraph } = req.body;
    const images = req.file ? req.file.filename : null;
    const newAward = new AwardModal({
      images,
      heading,
      paragraph,
    });
    await newAward.save();
    res.json({ message: "Successfully saved", award: newAward });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occurred during image upload." });
  }
};

const GetAward = async (req, res) => {
  try {
    const images = await AwardModal.find();
    res
      .status(200)
      .json({ status: 200, Message: "Successfully Fetch the Awards", images });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: "Error Ouccur Feching the Awards" });
  }
};

const DeleteAward = async (req, res) => {
  try {
    const _id  = req.params._id;

    const Award = await AwardModal.findByIdAndDelete(_id);

    if (!Award) {
      // If the slider with the given ID is not found
      return res.status(404).json({ status: 404, message: "Award not found" });
    }

    // If the slider is successfully deleted
    res.status(200).json({ status: 200, message: "Successfully deleted", Award });
  } catch (error) {
    // If an error occurs during the deletion process
    console.error(error);
    res.status(500).json({ status: 500, message: "Error occurred while deleting Award" });
  }
};

const GetAwardById = async (req,res) => {
  try {
    const _id  = req.params._id;


    const Award = await AwardModal.findById(_id);
    if (!Award) {
      // If the slider with the given ID is not found
      return res.status(404).json({ status: 404, message: "Award not found" });
    }
    const responseData = {
      _id: Award._id,
      images: Award.images,
      heading: Award.heading,
      paragraph: Award.paragraph,
    };
    res.status(200).json({ status: 200, message: "Successfully Fetch the By id", data: responseData });
  } catch (error) {
    {
      console.error(error);
      res.status(500).json({ status: 500, message: "Error occurred while deleting Award" });
    }
  }
}

const EditAward = async (req, res) => {
  try {
    const _id  = req.params._id;
    const { heading, paragraph } = req.body;
    const images = req.file ? req.file.filename : null;
    const Award = await AwardModal.findByIdAndUpdate(_id, {
      images: images,
      heading: heading,
      paragraph: paragraph
    }, { new: true });

    if (!Award) {
      // If the slider with the given ID is not found
      return res.status(404).json({ status: 404, message: "Award not found" });
    }

    // If the slider is successfully deleted
    res.status(200).json({ status: 200, message: "Successfully updated", Award });
  } catch (error) {
    // If an error occurs during the deletion process
    console.error(error);
    res.status(500).json({ status: 500, message: "Error occurred while updating Award" });
  }
}


module.exports = { CreateAward, GetAward, DeleteAward, EditAward,GetAwardById };
