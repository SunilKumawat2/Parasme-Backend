const PortFolios = require("../models/PortFolios");

const CreatePortFolios = async (req, res) => {
  try {
    const { title, decription, web_link, ios_link, android_link } = req.body;
    const images = req.file ? req.file.filename : null;

    const newportfolios = new PortFolios({
      images,
      title,
      decription,
      web_link,
      ios_link,
      android_link,
    });
    await newportfolios.save();
    return res.status(201).json({
      status: 201,
      message: "Successfully Create the portFolios",
      data: newportfolios,
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: "server side error" });
  }
};

const GetPortFolios = async (req, res) => {
  const portfolios = await PortFolios.find();
  try {
    if (portfolios.length > 0) {
      const portfoliosData = portfolios.map((portfoliosResult) => ({
        _id: portfoliosResult._id,
        images: portfoliosResult.images,
        title: portfoliosResult.title,
        decription: portfoliosResult.decription,
        web_link: portfoliosResult.web_link,
        ios_link: portfoliosResult.ios_link,
        android_link: portfoliosResult.android_link,
      }));
      return res
        .status(200)
        .json({
          status: 200,
          message: "Successfullt fetch the Portfolios",
          data: portfoliosData,
        });
    }
    return res.status(400).json({ status: 400, message: "data Not Found" });
  } catch (error) {
    return res.status(500).json({ status: 500, message: "server Side Error" });
  }
};

const DeletePortFolios = async (req, res) => {
  try {
    const { _id } = req.params;
    const DeletePortFolios = await PortFolios.findByIdAndDelete(_id);
    if (!DeletePortFolios) {
      return res.status(404).json({ status: 404, message: "PortFolios Not Found" });
    }
    return res.status(200).json({ status: 200, message: "Successfully Delete the PortFolios", data: DeletePortFolios });
  } catch (error) {
    return res.status(500).json({ status: 500, message: "Server Side Error" });
  }
}

const GetPortFoliosById = async (req, res) => {
  try {
    const { _id } = req.params;
    const GetPortFoliosById = await PortFolios.findById(_id);
    if (!GetPortFoliosById) {
      return res.status(404).json({ status: 404, message: "PortFolios Not Found By id" });

    }
    const PortFoliosData = {
      _id: GetPortFoliosById._id,
      images: GetPortFoliosById.images,
      title: GetPortFoliosById.title,
      decription: GetPortFoliosById.decription,
      web_link: GetPortFoliosById.web_link,
      ios_link: GetPortFoliosById.ios_link,
      android_link: GetPortFoliosById.android_link,
    }
    return res.status(200).json({ status: 200, message: "Successfully Fetch the PortFolios By id", data: PortFoliosData });
  } catch (error) {
    return res.status(500).json({ status: 500, message: "Server Side Error" });
  }
}

const UpdatePortFolios = async (req, res) => {
  try {
    const { _id } = req.params;
    const { title, decription, web_link, ios_link, android_link } = req.body;
    const images = req.file ? req.file.filename : null;
    const UpdatePortFolios = await PortFolios.findByIdAndUpdate(_id, {
      title: title,
      decription: decription,
      web_link: web_link,
      ios_link: ios_link,
      android_link: android_link,
      images: images
    },{new:true})
    if (!UpdatePortFolios) {
      return res.status(404).json({ status: 404, message: "PortFolios Not Found By id" })
    }
    return res.status(200).json({ status: 200, message: "Successfully Update the PortFolios By id", data: UpdatePortFolios })

  }
  catch (error) {
    return res.status(500).json({ status: 500, message: "Server Side Error" })

  }
}

module.exports = { CreatePortFolios, GetPortFolios, DeletePortFolios, GetPortFoliosById, UpdatePortFolios };
