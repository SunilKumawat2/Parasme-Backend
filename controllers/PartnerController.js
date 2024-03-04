const PartnerModals = require("../models/PartnerModals");

const CreatePartner = async (req, res) => {
  try {
    const { name } = req.body;
    const images = req.file ? req.file.filename : null;

    const newpartner = new PartnerModals({
      name,
      images,
    });
    await newpartner.save();
    res.status(201).json({
      status: 201,
      message: "Successfully Add The Partners",
      partner: newpartner,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: "Error Occur Add The Partners", error });
  }
};

const GetPartner = async (req, res) => {
  try {
    const Partners = await PartnerModals.find();
    if (Partners.length > 0) {
      const PartnerData = Partners.map((PartnersResult) => ({
        _id: PartnersResult._id,
        name: PartnersResult.name,
        images: PartnersResult.images,
      }));
      return res.status(200).json({
        status: 200,
        message: "successfully fetch the Partner data",
        partner: PartnerData,
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "No Partner Memeber found" });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "An error occurred while retrieving the Partner Memeber",
    });
  }
};

const deletePartner = async (req, res) => {
  try {
    const { _id } = req.params;
    const Partner = await PartnerModals.findByIdAndDelete(_id);
    if (!Partner) {
      return res.status(404).json({ status: 404, message: "No Partner Found For the Delete" });

    }
    return res.status(200).json({ status: 200, message: "Successfully Delete The Partner",data:Partner });
  } catch (error) {

    return res.status(500).json({ status: 500, message: "Server Side Error Delete The Partner" });
  }
}

const UpdatePartner = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name } = req.body;
    const images = req.file ? req.file.filename : null;
    const Partner = await PartnerModals.findByIdAndUpdate(_id, { name, images }, { new: true });
    if (!Partner) {
      return res.status(404).json({ status: 404, message: "No Partner Found For the Update" });
    }
    return res.status(200).json({ status: 200, message: "Successfully Update The Partner", Partner });
  } catch (error) {
    return res.status(500).json({ status: 500, message: "Server Side Error Update The Partner" });
  }
}

const GetPartnerById = async (req, res) => {
  try {
    const _id  = req.params._id;
    const Partner = await PartnerModals.findById(_id);
    if (!Partner) {
      return res.status(404).json({ status: 404, message: "No Partner Found For the Get By Id" });
    }
    const PartnersData = {
      _id: Partner._id,
      name: Partner.name,
      images: Partner.images,
    }
    return res.status(200).json({ status: 200, message: "Successfully Get The Partner By Id", data:PartnersData });
  } catch (error) {
    return res.status(500).json({ status: 500, message: "Server Side Error Get The Partner By Id" });
  }
}

module.exports = { CreatePartner, GetPartner, deletePartner, UpdatePartner, GetPartnerById };
