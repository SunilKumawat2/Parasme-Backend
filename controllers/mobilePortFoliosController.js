const mobileportfolios = require("../models/MobilePortFoilos");

const CreateMobilePortFolios = async (req, res) => {
    try {
        const { title, description, andriod_link, ios_link } = req.body;
        const images = req.file ? req.file.filename : null;

        const newMobilePortfolio = new mobileportfolios({
            title,
            description,
            andriod_link,
            ios_link,
            images
        })
        await newMobilePortfolio.save();
        return res.status(201).json({ status: 201, message: "Suceessfully Add The Mobile PortFolios", data: newMobilePortfolio })
    } catch (error) {

        return res.status(500).json({ status: 500, message: "server side error Add The Mobile PortFolios", data: newMobilePortfolio })
    }
}
const GetMobilePortFolios = async (req, res) => {
    try {
        const mobilePortfolios = await mobileportfolios.find();
        if (mobilePortfolios.length > 0) {
            return res.status(200).json({
                status: 200,
                message: "successfully get the Mobile PortFolios", data: mobilePortfolios
            })

        }
        return res.status(404).json({
            status: 404,
            message: "data Not Found the Mobile PortFolios"
        })

    } catch (error) {
        return res.status(500).json({ status: 500, message: "server side error get the Mobile PortFolios" })

    }
}
const GetMobilePortFoliosById = async (req, res) => {
    try {
        const { _id } = req.params;
        const mobilePortfolios = await mobileportfolios.findById(_id);
        if (!mobilePortfolios) {
            return res.status(404).json({ status: 404, message: "data Not Found Mobile Port Folios By Id" })
        }
        return res.status(200).json({
            status: 200,
            message: "successfully get the Mobile Port Folios By Id", data: mobilePortfolios
        })
    }
    catch (error) {
        return res.status(500).json({ status: 500, message: "server side error get the Mobile Port Folios By Id" })

    }

}
const DeleteMobilePortFolios = async (req, res) => {
    try {
        const { _id } = req.params;
        const mobilePortfolios = await mobileportfolios.findByIdAndDelete(_id);
        if (!mobilePortfolios) {
            return res.status(404).json({ status: 404, message: "data Not Found Mobile Port Folios Delete By Id" })
        }
        return res.status(200).json({
            status: 200,
            message: "successfully delete the Mobile Port Folios By Id", data: mobilePortfolios
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "server side error delete the Mobile Port Folios By Id"
        })
    }
}
const UpdateMobilePortFolios = async (req, res) => {
    try {
        const { _id } = req.params;
        const { title, description, andriod_link, ios_link } = req.body;
        const images = req.file ? req.file.filename : null;
        const mobilePortfolios = await mobileportfolios.findByIdAndUpdate(_id, {
            title: title,
            description: description,
            andriod_link: andriod_link,
            ios_link: ios_link,
            images: images
        })
        if (!mobilePortfolios) {
            return res.status(404).json({
                status: 404,
                message: "data Not Found Mobile Port Folios Update By Id"
            })
        }
        return res.status(201).json({
            status: 201,
            message: "Successfullly Update The Mobile PortFolios",
            data: mobilePortfolios
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "server side error Update The Mobile PortFolios"
        })
    }
}


module.exports = {
    CreateMobilePortFolios,
    GetMobilePortFolios,
    GetMobilePortFoliosById,
    UpdateMobilePortFolios, DeleteMobilePortFolios
}