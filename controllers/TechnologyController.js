const TechnologyModal = require("../models/Teachnology");

const CreateTechnology = async (req, res) => {
  try {
    const images = req.file ? req.file.filename : null;
    const newTechnology = new TechnologyModal({
      images,
    });
    await newTechnology.save();
    res.json({ message: "Successfully saved", Technology: newTechnology });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occurred during image upload." });
  }
};

const GetTechnology = async (req, res) => {
  try {
    const images = await TechnologyModal.find();
    res.json(images);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error occurred while fetching Technology images" });
  }
};

const DeleteTechnology = async (req,res)=>{
  const {_id} = req.params;
  const Technology = await TechnologyModal.findByIdAndDelete(_id);
  try{
    if(!Technology){
      res.status(404).json({message:"Technology not found"})
    }
    else{
       return res.status(200).json({message:"Technology deleted successfully"})
    
  }
}catch(error){
  return res.status(500).json({message:"Error occurred while deleting Technology"})

}
}

const GetTechnologyById = async (req,res)=>{

  try{
    const {_id} = req.params;
    const Technology = await TechnologyModal.findById(_id);
    if(!Technology){
      return res.status(404).json({message:"Technology not found"})
    
  }
  const TechnologyData = {
    _id: Technology._id,
    images: Technology.images,
  }
  return res.status(200).json({message:"Successfully fetched the Technology data By Id",data:TechnologyData})
  }catch(error){
    return res.status(500).json({message:"Error occurred while fetching Technology"})
  }
}

const EditTechnology = async (req, res) => {
  try {
    const { _id } = req.params;
    const images = req.file ? req.file.filename : null;
    const Technology = await TechnologyModal.findByIdAndUpdate(_id,{ images: images }, { new: true });

    if (!Technology) {
      return res.status(404).json({ status: 404, message: "Slider not found" });
    }

    res.status(200).json({ status: 200, message: "Successfully updated", data:Technology });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: "Error occurred while updating slider" });
  }
}

module.exports = { CreateTechnology, GetTechnology ,DeleteTechnology,GetTechnologyById,EditTechnology};
