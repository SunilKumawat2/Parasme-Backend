const OurServicesECommerce = require("../models/OurServicesEcommerce");

const CreateOurServicesEcommerce = async (req, res) => {
    try {
        const { title, description, sub_title, sub_description, about_page } = req.body;
        const images = req.file ? req.file.filename : null;
        const newCreateOurServicesWebDesign = new OurServicesECommerce({
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
            message: "Successfully Add the OurServicesECommerce"
            , data: newCreateOurServicesWebDesign
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error Add the OurServicesECommerce"
        })
    }
}
const GetOurServicesEcommerce = async (req, res) => {
    try {
        const OurServicesECommerces = await OurServicesECommerce.find();
        if (OurServicesECommerces.length > 0) {
            const OurServicesECommercesData = OurServicesECommerces.map((OurServicesECommercesResult) => ({
                _id: OurServicesECommercesResult._id,
                title: OurServicesECommercesResult.title,
                description: OurServicesECommercesResult.description,
                images: OurServicesECommercesResult.images,
                sub_title: OurServicesECommercesResult.sub_title,
                sub_description: OurServicesECommercesResult.sub_description,
                about_page: OurServicesECommercesResult.about_page
            }))
            res.status(200).json({
                status: 200
                , message: "successfully fetch the OurServicesECommerce"
                , data: OurServicesECommercesData
            })
        }
        else {
            res.status(400).json({
                status: 400
                , message: "data Not Found fetch the OurServicesECommerce"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error fetch the OurServicesECommerce"
        })
    }
}
const DeleteOurServicesEcommerce = async (req, res) => {
    try {
        const { _id } = req.params;
        const OurServicesECommerces = await OurServicesECommerce.findByIdAndDelete(_id);
        if (!OurServicesECommerces) {
            res.status(400).json({
                status: 400
                , message: "data Not Found Delete the OurServicesECommerce"
            })
        }
        else {
            res.status(200).json({
                status: 200
                , message: "Successfully Delete the OurServicesECommerce"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error Delete the OurServicesECommerce"
        })
    }
}
const GetOurServicesEcommerceById = async (req, res) => {
    try {
        const { _id } = req.params;
        const OurServicesECommerces = await OurServicesECommerce.findById(_id);
        if (!OurServicesECommerces) {
            res.status(400).json({
                status: 400
                , message: "data Not Found fetch the OurServicesECommerce"
            })
        }
        const OurServicesECommercesData = {
            _id: OurServicesECommerces._id,
            title: OurServicesECommerces.title,
            description: OurServicesECommerces.description,
            images: OurServicesECommerces.images,
            sub_title: OurServicesECommerces.sub_title,
            sub_description: OurServicesECommerces.sub_description,
            about_page: OurServicesECommerces.about_page
        }
        res.status(200).json({
            status: 200,
            message: "Successfully Fetch the OurServicesECommerce By Id"
            , data: OurServicesECommercesData
        })
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error fetch the OurServicesECommerce By Id"
        })
    }
}
const EditOurServicesEcommerce = async (req, res) => {

    try {
        const { _id } = req.params;
        const { title, description, sub_title, sub_description, about_page } = req.body;
        const images = req.file ? req.file.filename : null;
        const OurServicesECommerces = await OurServicesECommerce.findByIdAndUpdate(_id, {
            title,
            description,
            sub_title,
            sub_description,
            about_page,
            images
        }, { new: true })
        if (!OurServicesECommerces) {
            res.status(400).json({
                status: 400,
                message: "data Not Found Edit the OurServicesECommerce"
            })

        }
        else {
            res.status(200).json({
                status: 200,
                message: "Successfully Edit the OurServicesECommerce", data: OurServicesECommerces
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error Edit the OurServicesECommerce"
        })
    }
}
module.exports = {
    CreateOurServicesEcommerce,
    GetOurServicesEcommerce,
    DeleteOurServicesEcommerce,
    GetOurServicesEcommerceById,
    EditOurServicesEcommerce
}