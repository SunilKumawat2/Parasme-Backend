const BrandingProjects = require("../models/BrandingProjects");

const CreateBrandingProjects = async (req, res) => {
  try {
    const { name } = req.body;
    const images = req.file ? req.file.filename : null;
    const newBrandingProjects = new BrandingProjects({
      images,
      name,
    });
    await newBrandingProjects.save();
    return res.status(201).json({
      status: 201,
      message: "successfully Add Letest Branding Projects",
      projects: newBrandingProjects,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error Occur Add Letest Branding Projects",
    });
  }
};

const GetBrandingProjects = async (req, res) => {
  try {
    const images = await BrandingProjects.find();
    if (images.length > 0) {
      const imagesData = images.map((imagesResult) => ({
        _id: imagesResult._id,
        images: imagesResult.images,
        name: imagesResult.name,
      }));
      return res.status(200).json({
        status: 200,
        message: "successfully Fetch the Letest Branding Projects",
        data: imagesData,
      });
    } else {
      return res.status(404).json({
        status: 404,
        message: "Not Found the Letest Branding Projects",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error Occur Fetch the Letest Branding projects ",
    });
  }
};

const DeleteBrandingProjects = async (req, res) => {
  try {
    const { _id } = req.params;
    const BrandingProject = await BrandingProjects.findByIdAndDelete(_id);
    if (!BrandingProject) {
      return res.status(404).json({
        status: 404,
        message: "Not Found the Branding Projects",
      });
    }
    return res.status(200).json({ status: 200, message: "Successfully Delete The Branding Projects Section" })
  } catch (error) {
    return res.status(500).json({ status: 500, message: "Error Occur Delete The Branding Projects Section" })
  }
}

const GetBrandingProjectsById = async (req, res) => {
  try {
    const { _id } = req.params;
    const BrandingProject = await BrandingProjects.findById(_id);
    if (!BrandingProject) {
      return res.status(400).json({ status: 400, message: "Data Not Found For the Get  Branding Projects By Id" })
    }
    const BrandingProjectData = {
      _id: BrandingProject._id,
      images: BrandingProject.images,
      name: BrandingProject.name,
    }
    return res.status(200).json({
      status: 200
      , message: "Successfully Get  Branding Projects By Id"
      , data: BrandingProjectData
    })
  }
  catch (error) {
    return res.status(500).json({
      status: 500
      , message: "Server Side Error Get  Branding Projects By Id"
    })
  }

}

const EditBrandingProjects = async (req,res) => {
  try{
    const {_id} = req.params;
    const {name} = req.body;
    const images = req.file ? req.file.filename : null;
    const WebPortFolioUpdate = await BrandingProjects.findByIdAndUpdate(_id, {
      name: name,
      images: images
  }, { new: true });
  if(!WebPortFolioUpdate){
    return res.status(400).json({status:400,
      message:"Data Not Found For the Edit Web Portfolio"})
  }
  return res.status(201).json({status:201,
    message:"Successfully Edit The Web Portfolio",
  data:WebPortFolioUpdate})
  }catch(error){
    return res.status(500).json({status:500,
      message:"Server Side Error Edit The Web Portfolio"})
  }
}

module.exports = {
  CreateBrandingProjects,
  GetBrandingProjects,
  DeleteBrandingProjects,
  GetBrandingProjectsById,
  EditBrandingProjects
};
