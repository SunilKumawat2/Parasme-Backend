const OurServicesWebDesign = require("../models/OurServicesWebDesign");

const CreateOurServicesWebDesign = async (req, res) => {
    try {
        const { title, description, sub_title, sub_description, about_page } = req.body;
        const images = req.file ? req.file.filename : null;
        const newCreateOurServicesWebDesign = new OurServicesWebDesign({
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
            message: "Successfully Add the OurServicesWebDesign"
            , data: newCreateOurServicesWebDesign
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error Add the OurServicesWebDesign"
        })
    }
}
const GetOurServicesWebDesign = async (req, res) => {
    try {
        const OurServicesWebDesigns = await OurServicesWebDesign.find();
        if (OurServicesWebDesigns.length > 0) {
            const OurServicesDesignesData = OurServicesWebDesigns.map((OurServicesWebDesignsResult) => ({
                _id: OurServicesWebDesignsResult._id,
                title: OurServicesWebDesignsResult.title,
                description: OurServicesWebDesignsResult.description,
                images: OurServicesWebDesignsResult.images,
                sub_title: OurServicesWebDesignsResult.sub_title,
                sub_description: OurServicesWebDesignsResult.sub_description,
                about_page: OurServicesWebDesignsResult.about_page
            }))
            res.status(200).json({
                status: 200
                , message: "successfully fetch the OurServicesWebDesigns"
                , data: OurServicesDesignesData
            })
        }
        else {
            res.status(400).json({
                status: 400
                , message: "data Not Found fetch the OurServicesWebDesigns"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error fetch the OurServicesWebDesigns"
        })
    }
}
const DeleteOurServicesWebDesign = async (req, res) => {
    try {
        const { _id } = req.params;
        const OurServicesWebDesigns = await OurServicesWebDesign.findByIdAndDelete(_id);
        if (!OurServicesWebDesigns) {
            res.status(400).json({
                status: 400
                , message: "data Not Found Delete the OurServicesWebDesigns"
            })
        }
        else {
            res.status(200).json({
                status: 200
                , message: "Successfully Delete the OurServicesWebDesigns"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error Delete the OurServicesWebDesigns"
        })
    }
}
const GetOurServicesWebDesignById = async (req, res) => {
    try {
        const { _id } = req.params;
        const OurServicesWebDesigns = await OurServicesWebDesign.findById(_id);
        if (!OurServicesWebDesigns) {
            res.status(400).json({
                status: 400
                , message: "data Not Found fetch the OurServicesWebDesigns"
            })
        }
        const OurServicesWebDesignsData = {
            _id: OurServicesWebDesigns._id,
            title: OurServicesWebDesigns.title,
            description: OurServicesWebDesigns.description,
            images: OurServicesWebDesigns.images,
            sub_title: OurServicesWebDesigns.sub_title,
            sub_description: OurServicesWebDesigns.sub_description,
            about_page: OurServicesWebDesigns.about_page
        }
        res.status(200).json({
            status: 200,
            message: "Successfully Fetch the OurServicesWebDesigns By Id"
            , data: OurServicesWebDesignsData
        })
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error fetch the OurServicesWebDesigns By Id"
        })
    }
}
const EditOurServicesWebDesign = async (req, res) => {
    
    try {
        const { _id } = req.params;
        const { title, description, sub_title, sub_description, about_page } = req.body;
        const images = req.file ? req.file.filename : null;
        const OurServicesWebDesigns = await OurServicesWebDesign.findByIdAndUpdate(_id, {
            title,
            description,
            sub_title,
            sub_description,
            about_page,
            images
        }, { new: true })
        if (!OurServicesWebDesigns) {
            res.status(400).json({
                status: 400,
                message: "data Not Found Edit the OurServicesWebDesigns"
            })

        }
        else {
            res.status(200).json({
                status: 200,
                message: "Successfully Edit the OurServicesWebDesigns", data: OurServicesWebDesigns
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error Edit the OurServicesWebDesigns"
        })
    }
}
module.exports = {
    CreateOurServicesWebDesign,
    GetOurServicesWebDesign,
    DeleteOurServicesWebDesign,
    GetOurServicesWebDesignById,
    EditOurServicesWebDesign
}