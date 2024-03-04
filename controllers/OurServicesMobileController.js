const OurServicesMobile = require("../models/OurServicesMobile");

const CreateOurServicesMobile = async (req, res) => {
    try {
        const { title, description, sub_title, sub_description, about_page } = req.body;
        const images = req.file ? req.file.filename : null;
        const newCreateOurServicesMobile = new OurServicesMobile({
            title,
            description,
            images,
            sub_title,
            sub_description,
            about_page
        })
        await newCreateOurServicesMobile.save();
        res.status(201).json({
            status: 201,
            message: "Successfully Add the OurServicesMobile"
            , data: newCreateOurServicesMobile
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error Add the OurServicesMobile"
        })
    }
}
const GetOurServicesMobile = async (req, res) => {
    try {
        const OurServicesMobiles = await OurServicesMobile.find();
        if (OurServicesMobiles.length > 0) {
            const OurServicesMobilesData = OurServicesMobiles.map((OurServicesMobilesResult) => ({
                _id: OurServicesMobilesResult._id,
                title: OurServicesMobilesResult.title,
                description: OurServicesMobilesResult.description,
                images: OurServicesMobilesResult.images,
                sub_title: OurServicesMobilesResult.sub_title,
                sub_description: OurServicesMobilesResult.sub_description,
                about_page: OurServicesMobilesResult.about_page
            }))
            res.status(200).json({
                status: 200
                , message: "successfully fetch the OurServicesMobiles"
                , data: OurServicesMobilesData
            })
        }
        else {
            res.status(400).json({
                status: 400
                , message: "data Not Found fetch the OurServicesMobiles"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error fetch the OurServicesMobiles"
        })
    }
}
const DeleteOurServicesMobile = async (req, res) => {
    try {
        const { _id } = req.params;
        const OurServicesMobiles = await OurServicesMobile.findByIdAndDelete(_id);
        if (!OurServicesMobiles) {
            res.status(400).json({
                status: 400
                , message: "data Not Found Delete the OurServicesMobile"
            })
        }
        else {
            res.status(200).json({
                status: 200
                , message: "Successfully Delete the OurServicesMobile"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error Delete the OurServicesMobile"
        })
    }
}
const GetOurServicesMobileById = async (req, res) => {
    try {
        const { _id } = req.params;
        const OurServicesMobiles = await OurServicesMobile.findById(_id);
        if (!OurServicesMobiles) {
            res.status(400).json({
                status: 400
                , message: "data Not Found fetch the OurServicesMobiles"
            })
        }
        const OurServicesMobilesData = {
            _id: OurServicesMobiles._id,
            title: OurServicesMobiles.title,
            description: OurServicesMobiles.description,
            images: OurServicesMobiles.images,
            sub_title: OurServicesMobiles.sub_title,
            sub_description: OurServicesMobiles.sub_description,
            about_page: OurServicesMobiles.about_page
        }
        res.status(200).json({
            status: 200,
            message: "Successfully Fetch the OurServicesMobile By Id"
            , data: OurServicesMobilesData
        })
    } catch (error) {
        res.status(500).json({
            status: 500
            , message: "Server Side Error fetch the OurServicesMobile By Id"
        })
    }
}
const EditOurServicesMobile = async (req, res) => {

    try {
        const { _id } = req.params;
        const { title, description, sub_title, sub_description, about_page } = req.body;
        const images = req.file ? req.file.filename : null;
        const OurServicesMobiles = await OurServicesMobile.findByIdAndUpdate(_id, {
            title,
            description,
            sub_title,
            sub_description,
            about_page,
            images
        }, { new: true })
        if (!OurServicesMobiles) {
            res.status(400).json({
                status: 400,
                message: "data Not Found Edit the OurServicesMobile"
            })

        }
        else {
            res.status(200).json({
                status: 200,
                message: "Successfully Edit the OurServicesMobile", data: OurServicesMobiles
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Server Side Error Edit the OurServicesMobile"
        })
    }
}
module.exports = {
    CreateOurServicesMobile,
    GetOurServicesMobile,
    DeleteOurServicesMobile,
    GetOurServicesMobileById,
    EditOurServicesMobile
}