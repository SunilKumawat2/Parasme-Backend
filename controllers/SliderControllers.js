const SliderModal = require("../models/SliderModels");

const CreateSlider = async (req, res) => {
  try {
    const images = req.file ? req.file.filename : null;
    const newSlider = new SliderModal({
      images,
    });
    await newSlider.save();
    res.status(201).json({ status: 201, message: "Successfully saved", slider: newSlider });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occurred during image upload." });
  }
};

const GetImagesSlider = async (req, res) => {
  try {
    const images = await SliderModal.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while fetching images" });
  }
};

const GetImagesSliderById = async(req,res) => {
  try {
    const _id  = req.params._id;

    const slider = await SliderModal.findById(_id);
    if(!slider) 
    {
      return res.status(404).json({message:"Image not found"})
    }
    const responseData = {
      _id: slider._id,
      images: slider.images,
    };
    res.status(200).json({ status: 200, message: "Successfully fetched", data: responseData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error occurred while fetching images" });
  }
}

const DeleteSlider = async (req, res) => {
  try {
    const _id  = req.params._id;
    const slider = await SliderModal.findByIdAndDelete(_id);

    if (!slider) {
      // If the slider with the given ID is not found
      return res.status(404).json({ status: 404, message: "Slider not found" });
    }

    // If the slider is successfully deleted
    res.status(200).json({ status: 200, message: "Successfully deleted", slider });
  } catch (error) {
    // If an error occurs during the deletion process
    console.error(error);
    res.status(500).json({ status: 500, message: "Error occurred while deleting slider" });
  }
};

const EditSlider = async (req, res) => {
  try {
    const _id  = req.params._id;
    const images = req.file ? req.file.filename : null;
    const slider = await SliderModal.findByIdAndUpdate(_id,{ images: images }, { new: true });

    if (!slider) {
      return res.status(404).json({ status: 404, message: "Slider not found" });
    }

    res.status(200).json({ status: 200, message: "Successfully updated", slider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: "Error occurred while updating slider" });
  }
}

module.exports = { CreateSlider, GetImagesSlider, DeleteSlider, EditSlider ,GetImagesSliderById};
