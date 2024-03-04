const { default: mongoose } = require("mongoose");
const PagesModals = require("../models/PagesModals");

const CreatePages = async (req, res) => {
  try {
    const { title, shortdescription, content, subcontent } = req.body;
    const images = req.file ? req.file.filename : null;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTitle = new PagesModals({
      title,
      shortdescription,
      content,
      subcontent,
      images,
    });
    await newTitle.save();
    return res
      .status(201)
      .json({ status: 201, message: "Successfully add the Pages " });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: 500, message: "error Occuring the Pages " });
  }
};

const GetPage = async (req, res) => {
  const pages = await PagesModals.find();
  try {
    if (pages.length > 0) {
      const TitleData = pages.map((pages) => ({
        _id: pages._id,
        title: pages.title,
        content: pages.content,
        images: pages.images,
      }));
      return res.status(200).json({
        status: 200,
        message: "Successfully Fetch the Page",
        data: TitleData,
      });
    } else {
      return res.status(404).json({ status: 404, message: "Page not Found" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, message: "server Error" });
  }
};

const GetPageDetails = async (req, res) => {
  const pagesId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(pagesId)) {
    return res.status(400).json({ status: 400, message: "Invalid ID" });
  }
  console.log("pageID", pagesId);
  try {
    const title = await PagesModals.findById(pagesId);
    if (!title) {
      return res.status(400).json({ status: 400, message: "Title not found" });
    }
    const pageData = {
      _id: title._id,
      title: title.title,
      shortdescription: title.shortdescription,
      content: title.content,
      subcontent: title.subcontent,
      images: title.images,
    };
    return res.status(200).json({
      status: 200,
      message: "Successfully Fetch the page by id",
      data:pageData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: "Server error" });
  }
};
module.exports = { CreatePages, GetPage, GetPageDetails };
