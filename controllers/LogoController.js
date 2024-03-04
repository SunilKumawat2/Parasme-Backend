const Logo = require("../models/Logo");

const CreateLogo = async (req, res) => {
  try {
    const logo = req.file ? req.file.filename : null;

    const newlogo = new Logo({
      logo,
    });
    await newlogo.save();
    return res.status(201).json({
      status: 201,
      message: "Successfully Add The Logo",
      data: newlogo,
    });
  } catch (error) {
    return res.status(500).json({ status: 500, message: "server side error" });
  }
};

const GetLogo = async (req, res) => {
  const logo = await Logo.find();
  try {
    if (logo.length > 0) {
      const logoData = logo.map((logoResult) => ({
        _id: logoResult._id,
        logo: logoResult.logo,
      }));
      return res
        .status(200)
        .json({
          status: 200,
          message: "successfully Fetch the logo",
          data: logoData,
        });
    } else {
      return res.status(400).json({ status: 400, message: "Data not Found" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, message: "ServerSide Error" });
  }
};
module.exports = { CreateLogo, GetLogo };
