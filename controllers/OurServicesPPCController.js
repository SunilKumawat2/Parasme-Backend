const OurServicesPPC = require("../models/OurservicesPPC");

const CreateOurServicesPPC = async (req, res) => {
    try {
        const { title, description, sub_title, sub_description, about_page } = req.body;
        const images = req.file ? req.file.filename : null;
        const newCreateOurServicesWebDesign = new OurServicesPPC({
            title,
            description,
            images,
            sub_title,
            sub_description,
            about_page
        })
        await newCreateOurServicesWebDesign.save();
        res.status(201).json({
            status: 201,
            message: "Successfully Add the OurServicesPPC"
            , data: newCreateOurServicesWebDesign
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error Add the OurServicesPPC"
        })
    }
}
const GetOurServicesPPC = async (req, res) => {
    try {
        const OurServicesPPCs = await OurServicesPPC.find();
        if (OurServicesPPCs.length > 0) {
            const OurServicesECommercesData = OurServicesPPCs.map((OurServicesPPCsResult) => ({
                _id: OurServicesPPCsResult._id,
                title: OurServicesPPCsResult.title,
                description: OurServicesPPCsResult.description,
                images: OurServicesPPCsResult.images,
                sub_title: OurServicesPPCsResult.sub_title,
                sub_description: OurServicesPPCsResult.sub_description,
                about_page: OurServicesPPCsResult.about_page
            }))
            res.status(200).json({
                status: 200
                , message: "successfully fetch the OurServicesPPC"
                , data: OurServicesECommercesData
            })
        }
        else {
            res.status(400).json({
                status: 400
                , message: "data Not Found fetch the OurServicesPPC"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error fetch the OurServicesPPC"
        })
    }
}
const DeleteOurServicesPPC = async (req, res) => {
    try {
        const { _id } = req.params;
        const OurServicesECommerces = await OurServicesPPC.findByIdAndDelete(_id);
        if (!OurServicesECommerces) {
            res.status(400).json({
                status: 400
                , message: "data Not Found Delete the OurServicesPPC"
            })
        }
        else {
            res.status(200).json({
                status: 200
                , message: "Successfully Delete the OurServicesPPC"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error Delete the OurServicesPPC"
        })
    }
}
const GetOurServicesPPCById = async (req, res) => {
    try {
        const { _id } = req.params;
        const OurServicesPPCs = await OurServicesPPC.findById(_id);
        if (!OurServicesPPCs) {
            res.status(400).json({
                status: 400
                , message: "data Not Found fetch the OurServicesPPC"
            })
        }
        const OurServicesPPCssData = {
            _id: OurServicesPPCs._id,
            title: OurServicesPPCs.title,
            description: OurServicesPPCs.description,
            images: OurServicesPPCs.images,
            sub_title: OurServicesPPCs.sub_title,
            sub_description: OurServicesPPCs.sub_description,
            about_page: OurServicesPPCs.about_page
        }
        res.status(200).json({
            status: 200,
            message: "Successfully Fetch the OurServicesPPCs By Id"
            , data: OurServicesPPCssData
        })
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error fetch the OurServicesPPCs By Id"
        })
    }
}
const EditOurServicesPPC = async (req, res) => {

    try {
        const { _id } = req.params;
        const { title, description, sub_title, sub_description, about_page } = req.body;
        const images = req.file ? req.file.filename : null;
        const OurServicesPPCss = await OurServicesPPC.findByIdAndUpdate(_id, {
            title,
            description,
            sub_title,
            sub_description,
            about_page,
            images
        }, { new: true })
        if (!OurServicesPPCss) {
            res.status(400).json({
                status: 400,
                message: "data Not Found Edit the OurServicesECommerce"
            })

        }
        else {
            res.status(200).json({
                status: 200,
                message: "Successfully Edit the OurServicesPPCss", data: OurServicesPPCss
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error Edit the OurServicesPPCss"
        })
    }
}
module.exports = {
    CreateOurServicesPPC,
    GetOurServicesPPC,
    DeleteOurServicesPPC,
    GetOurServicesPPCById,
    EditOurServicesPPC
}